public class GameLevel{
	
	String levelNumber;

	public GameLevel(String levelNumber){
		this.levelNumber = levelNumber;
	}

	@Override
	public String toString(){
		return "Level number :"+levelNumber;
	}
}