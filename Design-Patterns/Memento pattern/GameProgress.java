import java.util.ArrayList;

public class GameProgress {
	
	ArrayList<GameLevel> gameLevel = new ArrayList<>();

	public void addLevel(GameLevel inputTexts){
		gameLevel.add(inputTexts);

	}

	@Override
	public String toString(){
		return "Game level:"+gameLevel;
	}

	public ArrayList<GameLevel> getProgressClone(){
		return (ArrayList)gameLevel.clone();
	}


	//save
	public ProgressMemento saveProgress(){
		return new ProgressMemento( getProgressClone());
	}

	//undo
	public void undoProgress(ProgressMemento progressMemento){
		gameLevel = progressMemento.getProgress();
	}
	

	static class ProgressMemento{

		ArrayList<GameLevel> gameLevel = new ArrayList<>();

		public ProgressMemento( ArrayList<GameLevel> gameLevel){
			this.gameLevel = gameLevel;
		}

		private ArrayList<GameLevel> getProgress(){
			return gameLevel;
		}
	}
}