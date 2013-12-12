import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.util.LinkedList;
import java.util.List;
import java.util.Scanner;

/**
 * The glorious initializer that creates the Categories.txt file from culling everything but links from Newegg's site map html.
 * @author John Du
 */
public class Initializer {
	
	/** Site we grab from, in this case, Newegg's site map */
	public static final String SITE = "http://www.newegg.com/Info/SiteMap.aspx";
	/** Output file thing */
	public static final String FILE = "Categories.txt";
	/** What we're looking for when we're searching through everything */
	public static final String[] EXCEPTIONS = new String[]{"nolone", "SubCategory"};
	
	public static void main(String[] args) {
		try {
			List<String> pageLines = pullSite(SITE);
			List<String> list = Culler.cullRepeats(Culler.cullAllExcept(pageLines, EXCEPTIONS));
			writeToFile(list, FILE);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	/**
	 * This is where we pull literally every line from a site's html file thing and throw it into a list.
	 * @param url URL as a String for where we want to pull from
	 * @return List of every line from the url's file
	 * @throws IOException
	 */
	private static List<String> pullSite(String url) throws IOException {
		List<String> lines = new LinkedList<String>();
		BufferedReader reader = null;
		reader = new BufferedReader(new InputStreamReader(new URL(url).openStream()));
		String line = "";
		while ((line = reader.readLine()) != null) {
			lines.add(line);
		}
		reader.close();
		return lines;
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
			builder.append(Culler.pullURL(line) + "\n");
		}
		Scanner reader = new Scanner(builder.toString());
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
}