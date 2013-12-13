import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.Scanner;

/**
 * The glorious initializer that creates every file we need for random product finding
 * @author John Du
 */
public class Initializer {
	
	/** Site we grab categories from, in this case, Newegg's site map */
	public static final String SITE = "http://www.newegg.com/Info/SiteMap.aspx";
	/** Category file thing */
	public static final String CATEGORY_FILE = "Categories";
	/** What we're looking for when we want categories */
	public static final String[] CATEGORY_EXCEPTIONS = new String[]{"nolone", "SubCategory"};
	/** What we're looking for when we want products */
	public static final String[] PRODUCT_EXCEPTIONS = new String[]{"View Details", "Product"};
	/** What we're looking for when we want product counts in a category */
	public static final String[] PRODUCT_COUNT_EXCEPTIONS = new String[]{"recordCount", "Products"};
	/** Name of the category array in the javascript */
	public static final String CATEGORY_ARRAY_NAME = "categories";
	/** Name of the product array in the javascript */
	public static final String PRODUCT_ARRAY_NAME = "products";
	/** This is where we want to store our files */
	public static final String SUBFOLDER = "generated/";
	/** Part of the category page URL that contains the ID thing */
	public static final int ID_INDEX = 5;
	
	/**
	 * @param args 0 is where we start, 1 is where we end, 2 is items per page, 3 is max pages
	 */
	public static void main(String[] args) {
		long startTime = System.currentTimeMillis();
		int startCount = Integer.parseInt(args[0]);
		int endCount = Integer.parseInt(args[1]);
		int itemsPerPage = Integer.parseInt(args[2]);
		int maxPages = Integer.parseInt(args[3]);
		try {
			List<String> categories =
				Culler.cullJS(Culler.pullURL(Culler.cullRepeats(pullSite(SITE, CATEGORY_EXCEPTIONS))));
			writeToFile(categories, SUBFOLDER + CATEGORY_FILE + ".js", CATEGORY_ARRAY_NAME);
			int count = startCount;
			for (String category : categories) {
				if(categories.indexOf(category) < startCount){
					continue;
				}
				if (endCount != -1 && categories.indexOf(category) > endCount) {
					break;
				}
				System.out.println("Begin " + getCategoryID(category));
				List<String> products = getProducts(category, itemsPerPage, maxPages);
				if (!products.isEmpty()) {
					writeToFile(products, SUBFOLDER + getCategoryID(category) + ".js", PRODUCT_ARRAY_NAME);
				} else {
					System.err.println("Broken link!");
				}
				System.out.println(++count + "/" + categories.size() + " categories done");
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
		System.out.println("Time to initialize: " + (double)(System.currentTimeMillis() - startTime) / 1000.0);
	}
	
	/**
	 * Pulls every single product from a category and throws them into a big list
	 * @param categoryPage Category page that we want products from
	 * @return All products from a category
	 * @throws IOException
	 */
	private static List<String> getProducts(String categoryPage, int itemsPerPage, int maxPages) throws IOException {
		List<String> productPageLines = pullSite(categoryPage + getPageSuffix(1, itemsPerPage));
		List<String> productCountList = Culler.cullAllExcept(productPageLines, PRODUCT_COUNT_EXCEPTIONS);
		if (productCountList.isEmpty()) {
			return productCountList;
		}
		String[] productCountParts = productCountList.get(0).split(" ");
		int productCount = 0;
		for (String part : productCountParts) {
			try {
				productCount = Integer.parseInt(part);
				break;
			} catch (NumberFormatException e) {
			}
		}
		int pageCount = (productCount >= itemsPerPage * maxPages) ? (maxPages) : (productCount / itemsPerPage);
		System.out.println(getCategoryID(categoryPage) + ":" + productCount + " products on " + pageCount + " pages");
		List<String> productList =
			Culler.cullRepeats(Culler.pullURL(Culler.cullAllExcept(productPageLines, PRODUCT_EXCEPTIONS)));
		for (int i = 1; i < pageCount + 1; i++) {
			List<String> productsOnPage = 
				Culler.pullURL(
					Culler.cullAllExcept(pullSite(categoryPage + getPageSuffix(i + 1, itemsPerPage)), PRODUCT_EXCEPTIONS));
			productList.addAll(productsOnPage);
		}
		productList = Culler.cullRepeats(productList);
		System.out.println("Finished " + getCategoryID(categoryPage));
		return productList;
	}

	/**
	 * This is where we pull literally every line from a site's html file thing and throw it into a list.
	 * @param url URL as a String for where we want to pull from
	 * @param exceptions If it contains the exceptions, we keep it in the list
	 * @return List of every line from the url's file except the exceptions
	 * @throws IOException
	 */
	private static List<String> pullSite(String url, String[] exceptions) throws IOException {
		List<String> lines = new LinkedList<String>();
		BufferedReader reader = null;
		reader = new BufferedReader(new InputStreamReader(new URL(url).openStream()));
		String line = "";
		while ((line = reader.readLine()) != null) {
			boolean hasException = true;
			for (String exception : exceptions) {
				if (!line.contains(exception)) {
					hasException = false;
					break;
				}
			}
			if (hasException) {
				lines.add(line.trim());
			}
		}
		reader.close();
		return lines;
	}

	/**
	 * This is where we pull literally every line from a site's html file thing and throw it into a list.
	 * @param url URL as a String for where we want to pull from
	 * @param exception If it contains the exception, we keep it in the list
	 * @return List of every line from the url's file except the exception
	 * @throws IOException
	 */
	private static List<String> pullSite(String url, String exception) throws IOException {
		return pullSite(url, new String[]{exception});
	}

	/**
	 * This is where we pull literally every line from a site's html file thing and throw it into a list.
	 * @param url URL as a String for where we want to pull from
	 * @return List of every line from the url's file
	 * @throws IOException
	 */
	private static List<String> pullSite(String url) throws IOException {
		return pullSite(url, "");
	}

	/**
	 * Throws every line in a given list of Strings into a file
	 * @param list List of Strings we want to throw into the file
	 * @param path Target, wherever we want to write our file
	 * @throws IOException
	 */
	private static void writeToFile(List<String> list, String path) throws IOException {
		StringBuilder builder = new StringBuilder();
		for (String line : list) {
			builder.append(line + "\n");
		}
		writeToFile(builder.toString(), path);
	}
	
	/**
	 * Writes everything from a list into a (hopefully) javascript file so that we can use an array
	 * @param list List of Strings we want to throw into the file
	 * @param path Target, wherever we want to write our file
	 * @param arrayName Name of the javascript's array
	 * @throws IOException
	 */
	private static void writeToFile(List<String> list, String path, String arrayName) throws IOException{
		StringBuilder builder = new StringBuilder();
		builder.append("var " + arrayName + " = [\n");
		Iterator<String> iterator = list.iterator();
		while (iterator.hasNext()) {
			builder.append("\t\"" + iterator.next() + "\"" + ((iterator.hasNext()) ? (",\n") : ("")));
		}
		builder.append("];");
		writeToFile(builder.toString(), path);
	}
	
	/**
	 * Throws a String into a file
	 * @param content String we want to throw into the file
	 * @param path Target, wherever we want to write our file
	 * @throws IOException
	 */
	private static void writeToFile(String content, String path) throws IOException {
		Scanner reader = new Scanner(content);
		BufferedWriter writer = new BufferedWriter(new FileWriter(path));
		while (reader.hasNextLine()) {
			writer.write(reader.nextLine());
			if (reader.hasNextLine()) {
				writer.newLine();
			}
		}
		reader.close();
		writer.close();
	}
	
	/**
	 * Pulls the ID from a category URL
	 * @param category Category URL
	 * @return ID of category
	 */
	private static String getCategoryID(String category) {
		return category.split("/")[ID_INDEX];
	}
	
	/**
	 * Gets the whole page suffix deal that we need to throw on category URLs
	 * @param page Page number
	 * @return URL ending for a specific page
	 */
	private static String getPageSuffix(int page, int itemsPerPage) {
		return "/Page-" + page + "?Pagesize=" + itemsPerPage;
	}
}