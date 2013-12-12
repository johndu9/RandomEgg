import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

/**
 * Culls the weak String bits that we don't want.
 * @author John Du
 */
public class Culler{
	
	/** The index where the URL begins because we like to cheese. */
	public static final int URL_BEGIN = 28;
	
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
		return line.substring(URL_BEGIN, line.length() - 1);
	}
}