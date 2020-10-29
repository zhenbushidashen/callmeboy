


interface Animal {
    age: number,
    sex: boolean,
    hasTail: boolean,
    liveArea: 'land'|'water'|'sky'
}


type Human = Record<'age',Animal>