import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

/**
 * Culls the weak String bits that we don't want.
 * @author John Du
 */
public class Culler{
	
	/**
	 * This is where we cull the repeat lines from a list.
	 * @param list List to cull
	 * @return Properly culled list
	 */
	public static ArrayList<String> cullRepeats(List<String> list) {
		ArrayList<String> newList = new ArrayList<String>();
		for(String line : list) {
			if(!newList.contains(line)) {
				newList.add(line);
			}
		}
		return newList;
	}
	
	/**
	 * Culls everything except those we deem worthy.
	 * @param list List to cull
	 * @param exception That which we deem worthy to spare from the culling
	 * @return A list void of weakness
	 */
	public static List<String> cullAllExcept(List<String> list, String exception) {
		List<String> newList = new LinkedList<String>();
		for (String line : list) {
			if (line.contains(exception)) {
				newList.add(line.trim());
			}
		}
		return newList;
	}
	
	/**
	 * Culls everything except those we deem worthy.
	 * @param list List to cull
	 * @param exceptions Those we deem worthy to spare from the culling
	 * @return A list void of weakness
	 */
	public static List<String> cullAllExcept(List<String> list, String[] exceptions) {
		List<String> newList = list;
		for (String exception : exceptions) {
			newList = cullAllExcept(newList, exception);
		}
		return newList;
	}
	
	/**
	 * Culls everything except the illustrious URL that we seek.
	 * @param line Line to cull
	 * @return The illustrious URL
	 */
	public static String pullURL(String line) {
		String[] parts = line.split("\"");
		for (String part : parts) {
			if (part.contains("http://")) {
				return part;
			}
		}
		return null;
	}
	
	/**
	 * Culls everything in a list except for delicious URL Strings
	 * @param list List to cull
	 * @return The delicious URL Strings
	 */
	public static List<String> pullURL(List<String> list) {
		List<String> newList = new LinkedList<String>();
		for (String line : list) {
			newList.add(pullURL(line));
		}
		return newList;
	}
	
	/**
	 * Culls the javascript stuff in the URL
	 * @param list List of URL Strings
	 * @return Javascript-less URL Strings
	 */
	public static List<String> cullJS(List<String> list) {
		List<String> newList = new LinkedList<String>();
		for (String line : list) {
			newList.add(line.split("\\?")[0]);
		}
		return newList;
	}
}