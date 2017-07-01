import java.util.HashMap;

//simple codewars challenge in Java.
public class FindOdd {
	public static int findIt(int[] A) {
    HashMap<Integer, Integer> myHash = new HashMap<Integer, Integer>();
    for(int i = 0; i < A.length; i++){
      if(myHash.get(A[i]) == null){
        myHash.put(A[i], 1);
      } else {
        int x = myHash.get(A[i]);
        myHash.put(A[i], x + 1);
      }
    }
    int odd = 0;
    for(int key : myHash.keySet()){
      if(myHash.get(key) % 2 == 1){
        odd = key;
      }
    }
  	return odd;
  }
}
