

public class ExerciciVariables {

	public static void main(String args[]) {
		
		//FASE 1
		
		System.out.println("------");
		System.out.println("FASE 1");
		System.out.println("------");
		
		String nom = "Pepe";
		String cognom1 = "Perez";
		String cognom2 = "Garc�a";
		
		int dia = 25;
		int mes = 5;
		int any = 2020;
		
		System.out.println(cognom1+" "+cognom2+", "+nom);
		System.out.println(dia+"/"+mes+"/"+any);
		
		//FASE 2

		System.out.println("------");
		System.out.println("FASE 2");
		System.out.println("------");
		
		final int anyInicial = 1948;
		int periodeAnyTraspas = 4;
		int anyNaixement = 1982;
		
		int numAnysTraspas = (anyNaixement-anyInicial)/periodeAnyTraspas;
		System.out.println("Hi ha " + numAnysTraspas + " anys de trasp�s entre "+ anyInicial + " i " + anyNaixement);
		
		//FASE 3
		
		System.out.println("------");
		System.out.println("FASE 3");
		System.out.println("------");
		
		for(int i=anyInicial;i<=anyNaixement;i+=4) {
			System.out.println("Any de trasp�s: "+ i);
		}
		
		boolean esTraspas = (anyNaixement % 4 == 0);
		String tsi = anyNaixement + " s� �s any de trasp�s";
		String tno = anyNaixement + " no �s any de trasp�s";
		if (esTraspas) {
			System.out.println(tsi);
		}else {
			System.out.println(tno);
		}
		
		//FASE 4
		
		System.out.println("------");
		System.out.println("FASE 4");
		System.out.println("------");
		
		int diaNaixement = 20;
		int mesNaixement = 2;
		
		System.out.println("El meu nom �s " + nom + " " + cognom1 + " " + cognom2);
		System.out.println("Vaig n�ixer el " + diaNaixement+"/"+mesNaixement+"/"+anyNaixement);
		if (esTraspas) {
			System.out.println(tsi);
		}else {
			System.out.println(tno);
		}
	}
	
}
