import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.LinkedList;
import java.util.List;
import java.util.Scanner;


/**
 * Main class that will make an initializer based on arguments and subsequently make lists
 * Acceptable arguments are as follows:
 * 	{boolean force generate categories, int start index, int end index, int items per page, int max pages}
 * 	{boolean force generate categories, String category name, int items per page, int max pages}
 * 	{boolean force generate categories, int items per page, int max pages}
 * 	{String category name, int items per page, int max pages}
 *  {} no args just generates the category files
 * @author John Du
 */
public class Main {
	public static void main(String[] args) {
		long startTime = System.currentTimeMillis();
		System.out.print("Running with args: ");
		for (String arg : args) {
			System.out.print(arg + " ");
		}
		System.out.println();
		Initializer initializer = null;
		List<String> categories = null;
		if (args.length == 0) {
			initializer = new Initializer(0, 0);
			try {
				initializer.getCategories();
			} catch (IOException e) {
				e.printStackTrace();
			}
			printEndTime(startTime);
			return;
		}
		File categoriesFile = new File(Initializer.SUBFOLDER + Initializer.CATEGORY_FILE_NAME + ".txt");
		if (args[0].contains("ID-")) {
			categories = new LinkedList<String>();
			categories.add("http://www.newegg.com/Placeholder/SubCategory/" + args[0]);
		} else if (!Boolean.parseBoolean(args[0]) && categoriesFile.exists()) {
			Scanner reader = null;
			try {
				reader = new Scanner(categoriesFile);
			} catch (FileNotFoundException e) {
				e.printStackTrace();
			}
			categories = new LinkedList<String>();
			while (reader.hasNext()) {
				categories.add(reader.next());
			}
			reader.close();
		}
		if (args.length == 5) {
			initializer = new Initializer(
				Integer.parseInt(args[1]), Integer.parseInt(args[2]), Integer.parseInt(args[3]), Integer.parseInt(args[4]));
		} else if (args.length == 4) {
			initializer = new Initializer(
				args[1], Integer.parseInt(args[2]), Integer.parseInt(args[3]));
		} else if (args.length == 3) {
			initializer = new Initializer(
				Integer.parseInt(args[1]), Integer.parseInt(args[2]));
		} else {
			System.err.println("Not enough arguments!");
			System.exit("args".hashCode());
		}
		if (categories != null) {
			initializer.setCategories(categories);
		}
		initializer.init();
		printEndTime(startTime);
	}
	
	private static void printEndTime(long startTime) {
		System.out.println("Run time: " + (double)(System.currentTimeMillis() - startTime) / 1000.0 + " seconds");
	}
}