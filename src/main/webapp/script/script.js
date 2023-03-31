class Alumno {
	constructor (idAlumno,nombre,apellidos,telefono,marca,modelo,idPortatil)
	{
		this.idAlumno = idAlumno;
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.telefono = telefono;
		this.marca=marca;
		this.modelo=modelo;
		this.idportatil=idPortatil;
	}
}

class implementacionAlumno{
	
	static addMatriculaAlumno(bd){
		var idAlumno = CalcularId.calculaid(bd);
		var nombre = prompt("Introduzca su nombre: ");
		var apellidos = prompt("Introduzca sus apellidos: ");
		var telefono = Number(prompt("Introduzca su nombre: "));
		var marca = prompt("Introduzca la marca del portatil: ");
		var modelo = prompt("Introduzca el modelo del portatil: ");
		
		var idPortatil = marca.substring(0,3)+"-"+modelo.substring(0,3);
		
		var alumno = new Alumno(idAlumno,nombre,apellidos,telefono,marca,modelo,idPortatil);
		
		bd.push(alumno)
		return bd;
	}
	
	static borrarAlumno(bd){
		if(bd.length!=0){
			var borrar =prompt("Introduzca el id del Alumno:");
				for(var i=0;i<bd.length;i++){
					if(bd[i].identificadorAlumno==borrar)
						delete(bd[i]);
							
					return bd;
				}
		}
	}
	
	static mostrarMatriculas(bd){
		if(bd.length!=0){
			for(var i=0;i<bd.length;i++)
			{
					alert("Id: "+bd[i].identificadorAlumno+"\nNombre: "+bd[i].nombre+"\nApellidos: "+bd[i].apellidos+"\nTelefono: "+bd[i].telefono+"\nId del Portatil: "+bd[i].identificadorPortatil);
			}
		}
		else
			alert("No hay ninguna matricula")
	
	}
}	

class CalcularId{
	
	static calculaid(bd){
		if(bd.length!=0){
			var id=0;
			for(var i=0;i<bd.length;i++) {
				var j=bd[i].idAlumno;
				if(id<j)
					id=j;
			}
			return id+1;
		}
		else
			return 0;
		}
}

function Menu(){
	var bd=[];
	var opcion;
	do{
		opcion=Number(prompt("1-Matricular Alumno\n2-Borrar Alumno\n3-Listar Alumno\n0-Salir\n Introduzca una opcion:"));
		switch(opcion)
	 	{
			case 1:
				 implementacionAlumno.addMatriculaAlumno(bd);
				 break;
			case 2:
				 implementacionAlumno.borrarAlumno(bd);
				 break;
			case 3:
				implementacionAlumno.mostrarMatriculas(bd);
				break;
		 }
	
	 }while(opcion!=0);
}