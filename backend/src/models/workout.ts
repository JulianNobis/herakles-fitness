import Template from "./template";

export default class Workout{
    id: string;
    name: string; // TODO should it have a name (template already has a name)
    template: Template;
    date: Date; // TODO check if Date is correct datatype
    duration: TimeRanges; // TODO check if TimeRanges is correct datatype
    notes?: string; // TODO check if '?' is necessary in constructor
    // TODO provide overview at the end of the workout -> should this be an own datatype?

    constructor (id: string, name: string, template: Template, date: Date, duration: TimeRanges, notes: string){
        this.id = id;
        this.name = name;
        this.template = template;
        this.date = date;
        this.duration = duration;
        this.notes = notes;
    }

}