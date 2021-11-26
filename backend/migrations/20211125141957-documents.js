module.exports = {
  async up(db, client) {
      try {
        await db.collection("exercises").insertMany(
            [
                {name: "Squat"},
                {name: "Leg press"},
                {name: "Lunge"},
                {name: "Deadlift"},
                {name: "Leg extension"},
                {name: "Lying Hamstring curl"},
                {name: "Standing calf raise"},
                {name: "Seated calf raise"},
                {name: "Hip adductor (Good Girl)"},
                {name: "Hip abductor (Bad Girl)"},
                {name: "Bench press"},
                {name: "Chest fly"},
                {name: "Chest press"},
                {name: "Incline Dumbbell press"},
                {name: "Push up"},
                {name: "Pull up"},
                {name: "Lat pulldown"},
                {name: "Cable row"},
                {name: "Barbell row"},
                {name: "Overhead press"},
                {name: "Shoulder press"},
                {name: "Lateral raise"},
                {name: "Shoulder shrug"},
                {name: "Tricep Pushdown"},
                {name: "Tricep extensions"},
                {name: "Dumbbell curl"},
                {name: "Incline Dumbbell curl"},
                {name: "Hammer curl"},
                {name: "Preacher curl"},
                {name: "Concentration curl"},
                {name: "Ez bar curl"},
                {name: "Crunch"},
                {name: "Hanging Leg raise"},
                {name: "Hanging Knee raise"},
                {name: "Russian twist"},
                {name: "Plank"},
                {name: "Back extension"},
                {name: "Romanian Deadlift"},
                {name: "Hack Squat"}
            ]
        );
  
        await db.collection("templates").insertMany(
            [
                {name: "fullbody", exercises: [{name: "Squat"}, {name: "Deadlift"}, {name: "Bench press"}, {name: "Overhead press"}]},
                {name: "pull", exercises: [{name: "Deadlift"}, {name: "Pull up"}, {name: "Cable row"}, {name: "Dumbbell curl"}, {name: "Incline Dumbbell curl"}]},
                {name: "push", exercises: [{name: "Bench press"}, {name: "Incline Dumbbell press"}, {name: "Chest press"}, {name: "Overhead press"}, {name: "Lateral raise"}, {name: "Tricep pushdown"}, {name: "Tricep extension"}]},
                {name: "legs", exercises: [{name: "Squat"}, {name: "Romanian Deadlift"}, {name: "Leg press"}, {name: "Back extension"}, {name: "Seated calf raise"}]},
                {name: "upperbody", exercises: [{name: "Bench press"}, {name: "Deadlift"}, {name: "Chest press"}, {name: "Barbell row"}, {name: "Overhead press"}, {name: "Dumbbell curl"}, {name: "Tricep pushdown"}]},
                {name: "lowerbody", exercises: [{name: "Squat"}, {name: "Deadlift"}, {name: "Leg press"}, {name: "Back extension"}, {name: "Seated calf raise"}]},
            ]
        );
    
      } catch (e){
          console.log(e);
      }
      
  },

  async down(db, client) {
      db.collection("templates").drop();
      db.collection("exercises").drop();
  }
};
