package streams;

import java.io.InputStream;
import java.util.Scanner;

public class readingFromConsole {

    public static void main(String[] args) {
        //getting input from user will be using Scanner object

        Scanner input = new Scanner(System.in);
        String str1 = input.nextLine();
        input.close();

        System.out.println(str1);


        //using input stream


        
    }

};
