package leetCode;

public class parenthesis {

    public static void main(String[] args) {
        System.out.println(isvalid("Hello"));
    }


    static boolean isvalid(String string){

        // check if the string contains brackers [] {} ()
        // split the string into array of string and iterate each char for the above


        char openBracket = '[';
        String closeBracket = "]";
        char openCurly = '{';
        char closeCurly = '}';
        char openParenthesis = '(';
        char closeParentesis = ')';
    
  

        for (int i = 0 ; i <= string.length(); i++){
            if (String.valueOf(i+1).equals(closeBracket)){
                
            return true;
            }
        }

        return true;
    }
}


