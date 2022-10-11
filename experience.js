const experience = {
    year : '',
    location : '',
    duration : '',
    activity : '',
    constructor : function(year, location, duration, activity){
        this.year = year;
        this.location = location;
        this.duration = duration;
        this.activity = activity;
    },
    get getYear(){
        return this.year;
    },
    get getLocation(){
        return this.location;
    },
    get getDuration(){
        return this.duration;
    },
    get getActivity(){
        return this.activity;
    }
}