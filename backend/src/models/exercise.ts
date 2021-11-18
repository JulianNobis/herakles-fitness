export default class Exericse {
    id: number; 
    name: string;
    sets: number;
    reps: number;
    intensity?: Intensity; // '?' also needed at constructor?

    // TODO check if another constructor is necessary as well
    constructor(id: number, name: string, sets: number, reps: number, intensity: Intensity){
        this.id = id;
        this.name = name;
        this.sets = sets;
        this.reps = reps;
        this.intensity = intensity;
    }

}

enum Intensity{ // TODO should this be done in an own file? (I don't think so)
    Easy,
    Light,
    Moderate,
    Hard,
    AllOut
    // TODO RPE should also be possible (either instead or optionally included...)
}

