import java.io.File;
import java.io.FileNotFoundException;
import java.util.LinkedList;
import java.util.List;
import java.util.Scanner;


/**
 * Main class that will make an initializer based on arguments and subsequently make lists
 * Acceptable arguments are as follows:
 * 	{boolean force generate categories, int start index, int end index, int items per page, int max pages}
 * 	{boolean force generate categories, String category name, int items per page, int max pages}
 * 	{boolean force generate categories, int items per page, int max pages}
 * @author John Du
 */
public class Main {
	public static void main(String[] args) {
		Initializer initializer = null;
		List<String> categories = null;
		if (args[0].equals("true") && new File("generated/Categories.txt").exists()) {
			Scanner reader = null;
			try {
				reader = new Scanner(new File("generated/Categories.txt"));
			} catch (FileNotFoundException e) {
				e.printStackTrace();
			}
			categories = new LinkedList<String>();
			while (reader.hasNext()) {
				categories.add(reader.next());
			}
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
	}
}