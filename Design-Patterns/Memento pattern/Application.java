public class Application{

	public static void main(String[] args){
		
		CareTaker caretaker = new CareTaker();
		
		GameProgress gameProgress = new GameProgress();

		gameProgress.addLevel( new GameLevel("LEVEL-1"));
		caretaker.saveProgress(gameProgress);
		System.out.println(gameProgress);

		gameProgress.addLevel( new GameLevel("LEVEL-2"));
		caretaker.saveProgress(gameProgress);
		System.out.println(gameProgress);

		caretaker.undoProgress(gameProgress);
//		caretaker.undoProgress(gameProgress);
		System.out.println(gameProgress);
	}
}