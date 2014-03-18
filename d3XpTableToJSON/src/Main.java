import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class Main {
	public static void main(final String... args) {
		final String csvFile = "./sheet.csv"; // data from:
												// https://docs.google.com/spreadsheet/ccc?key=0Aij7aUhIq8RIdHZRZzhFemxxaDFxR0M4clFIS3FJZGc#gid=9
		final String outputFile = "./output.txt";
		BufferedWriter bWriter = null;
		BufferedReader br = null;
		String line = "";
		final String cvsSplitBy = ",";
		try {
			bWriter = new BufferedWriter(new FileWriter(outputFile));
			br = new BufferedReader(new FileReader(csvFile));
			while ((line = br.readLine()) != null) {
				final String[] level = line.split(cvsSplitBy);
				bWriter.append("{ \"level\":   " + level[0] + ", \"xp\":    "
						+ level[1] + ", \"totalXP\":     " + level[2] + "},"
						+ System.getProperty("line.separator"));
				// [0] = level
				// [1] = xp
				// [2] = total xp
			}
			bWriter.flush();
		} catch (final FileNotFoundException e) {
			e.printStackTrace();
		} catch (final IOException e) {
			e.printStackTrace();
		} finally {
			if (br != null) {
				try {
					br.close();
				} catch (final IOException e) {
					e.printStackTrace();
				}
			}
		}
	}
}
