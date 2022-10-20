
let obj1 = {
	firstName: "Витя",
	lastName: "Киселёв",
	age: 45,
	children: null,
	dates: {
		birthday: '26.01.1977',
		wedding: '05.09.2000',
		graduationFromUniversity: '07.06.2003',
	},
}

const obj2 = {
    name: 'Олег',
    age: 23,
    cars: {
        car1: {
            brand: "Вольва",
        },
        car2: {
            brand: "Волга",
        },
    },
}

console.clear();

function parseOb (ob) {

    for(let key in ob)
    {   

        if (ob[key] == null) {
            ob[key] = "Нету";
        }

        if (typeof ob[key] == "object")
        {
            console.log(" " + key + " : ");
            parseOb(ob[key]);
        }
        else
        {  
            console.log(key + " - '"  + ob[key] + "'");
        }

    }
}

parseOb(obj2);