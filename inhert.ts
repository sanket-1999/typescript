interface Printable{
    x: number;
    print: ()=>void
    }
   
    let circle: Printable= {
    x: 100,
    print:()=>document.write("Circle printed "+ circle.x +"<br>")
    }
    

    let employee: Printable= {
        x: 110,
        print:()=>document.write("Employee printed " + employee.x)
        }

        let xyz={printall(circle,employee){
            circle.print();
            employee.print();}
        }
     
     

   xyz.printall(circle,employee);