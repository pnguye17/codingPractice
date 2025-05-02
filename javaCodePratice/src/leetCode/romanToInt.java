package leetCode;

import java.util.HashMap;

public class romanToInt {

    public static void main(String[] args) {

        changeRomanToInt("III");

    }

    private static void changeRomanToInt(String s) {
        int sum = 0;

        HashMap<String, Integer> numerals = new HashMap<>();
        numerals.put("I", 1);
        numerals.put("V", 5);
        numerals.put("X", 10);
        numerals.put("L", 50);
        numerals.put("C", 100);
        numerals.put("D", 500);
        numerals.put("M", 1000);
        numerals.put("IV", 4);
        numerals.put("IX", 9);
        numerals.put("XL", 40);
        numerals.put("XC", 90);
        numerals.put("CD", 400);
        numerals.put("CM", 900);

        //split given string into array of chars

        String[] strings = s.split("");

        // for (String str : strings){
        //     System.out.println(str);
        // }

        for (int t = 0; t <  s.length() - 1; t++ ){
            if (strings[t] == "I") {
                sum = sum + numerals.get(strings[t]);
                System.out.print(sum);
            }
        } 

        
    }
}
