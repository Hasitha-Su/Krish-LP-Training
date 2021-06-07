import java. util. *;

public class CareTaker{

	Stack<GameProgress.ProgressMemento>  gameHistory = new Stack<>();
	
	//save notepad state to the stack
	public void saveProgress(GameProgress gameProgress){
		gameHistory.push(gameProgress.saveProgress());
	}

	//undo state
	public void undoProgress(GameProgress gameProgress){
		if(!gameHistory.isEmpty())
			gameProgress.undoProgress(gameHistory.pop());
		else
			System.out.println("Can not undo...!");
	}
}


