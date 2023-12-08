import java.io.*;
import java.util.*;
import java.util.regex.Pattern;

/**
 * Advent Util
 *
 * Some utility functions to read structured input for Advent Of Code.
 *
 * @author IceSelkie
 * @version 1.0 (2023-12-04)
**/
public class AdventUtil {
  /** Read AOC puzzle input from "input.txt" and split it up into parts. **/
  public static ArrayList<Object> readInput(String fname, String... delimiterPatterns) {
    // Read the file to a string
    String data = readFile(fname != null ? fname : "input.txt");

    // Perform recursive splitting
    return splitRecursively(data, delimitersToPatterns(delimiterPatterns), 0);
  }

  /**
   * Convert the structure that comes from readInput to a printable string
   * example: stringify([["a","b"],"c",[["d"]]], false) -> '[["a","b"],"c",[["d"]]]'
   * example: stringify([["a","b"],"c",[["d"]]], true) ->
   * """
   * [
   *   [
   *     "a",
   *     "b"
   *   ],
   *   "c",
   *   [
   *     [
   *       "d"
   *     ]
   *   ]
   * ]
   * """
  **/
  public static String stringify(List<Object> data, boolean pretty) {
    return stringifyHelper(data, pretty, 0).toString();
  }



  //////// Private helper functions from here on down ////////

  private static String readFile(String fname) {
    // StringBuilders allow efficient string concatination.
    // Puzzle inputs should not be large enough for this to make a difference,
    // but it is good form to do this.
    StringBuilder content = new StringBuilder();
    try (BufferedReader reader = new BufferedReader(new FileReader(fname))) {
      String line;
      do {
        // Get next line
        line = reader.readLine();
        // Store the line.
        content.append(line).append("\n");
      } while (line != null);
    } catch (IOException e) {
      // Wrap the IOException in a RuntimeException
      // This is to prevent needing try catch blocks in/around readInput.
      throw new RuntimeException("Error reading file: " + fname, e);
    }
    return content.toString();
  }

  private static List<Pattern> delimitersToPatterns(String... delimiterPatterns) {
    // Use default delimiter of the newline character ("\n") if none provided
    if (delimiterPatterns == null || delimiterPatterns.length == 0)
      return Collections.singletonList(Pattern.compile("\n"));

    // Compile delimiters into RegexPattern objects.
    List<Pattern> regexPatterns = new ArrayList<>();
    for (String delimiter : delimiterPatterns)
      regexPatterns.add(Pattern.compile(delimiter));
    return regexPatterns;
  }

  private static ArrayList<Object> splitRecursively(String str, List<Pattern> delimiters, int index) {
    // End of the tree:
    if (index == delimiters.size() - 1)
      return new ArrayList<>(Arrays.asList(delimiters.get(index).split(str)));

    // Middle of the tree:
    String[] parts = delimiters.get(index).split(str);
    ArrayList<Object> result = new ArrayList<>();
    for (String part : parts)
      result.add(splitRecursively(part, delimiters, index + 1));
    return result;
  }

  // Recursively convert Lists/Strings to a string
  private static StringBuilder stringifyHelper(List<Object> data, boolean pretty, int depth) {
    if (data == null || data.isEmpty())
      return new StringBuilder("[]");

    String separator = ",";
    String indent    = "";
    String indentEnd = "";
    if (pretty) {
      indent    = "\n" + "  ".repeat(depth + 1);
      indentEnd = "\n" + "  ".repeat(depth);
    }

    StringBuilder sb = new StringBuilder();
    sb.append("[").append(indent);
    for (int i = 0; i < data.size(); i++) {
      Object element = data.get(i);
      // String
      if (element instanceof String) {
        sb.append("\"").append(element).append("\"");
      }
      // Array
      if (element instanceof List) {
        // Tell java to shut up about the "unchecked" typecast.
        @SuppressWarnings("unchecked")
        List<Object> list = (List<Object>) element;
        sb.append(stringifyHelper(list, pretty, depth + 1));
      }

      // Seperator / end of list
      if (i < data.size() - 1)
        sb.append(separator).append(indent);
      else
        sb.append(indentEnd);
    }
    sb.append("]");

    return sb;
  }
}
