import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Scanner;

/**
 * Main class that will take a file of links (Categories.txt) generated from Initializer and give you a random line.
 * @author John Du
 */
public class Main {
	public static void main(String[] args) {
		ArrayList<String> links = new ArrayList<String>();
		Scanner reader = null;
		try {
			reader = new Scanner(new File("Categories.txt"));
		} catch (FileNotFoundException e) {
			e.printStackTrace();
			System.err.println("Categories.txt does not exist. Try running Initializer first.");
			System.exit(404);
		}
		while(reader.hasNext()){
			links.add(reader.next());
		}
		String link = links.get((int)(Math.random() * (double)(links.size() - 1)));
		System.out.println(link);
		reader.close();
	}
}