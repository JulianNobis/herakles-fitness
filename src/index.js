function startServer(){
    const express = require('express');
    const app = express();
    const PORT = 8080;

    app.use(express.json())

    app.listen( 
        PORT, () => console.log(`app is listening on localhost:${PORT}`)
    )

    // TODO: move to correct folder, refactor code big time!!!
    // TODO: define project structure further (loader, config, jobs, subscribers, etc...)
    //       how should index.js look like in a "clean" project structure?
    // TODO: routing tables? how to do them and think of fitting names for them
    // TODO: best way to access mongoDB in nodejs (also: where to do this best)
    // TODO: define data structure: 'template' even necessary? (I think so, because of cookie-cutter pull/push/legs etc. workouts)
    //       workout(id, name, template, date, duration, [optional] notes, overview {at the end of the workout a summary?})
    //       template(id, list of exercises, name?)
    //       exercise(id, name, sets, reps, [optional] intensity {easy, light, moderate, hard, all-out OR RPE})
    // TODO: which enpdoints? (workout, template, exercise)
    // TODO: which functionalites should the front page have? -> 
    //       choose from different templates (pull/push/legs, upper/lower, etc.)
    //       later: modify templates (think of a good data structure for database!!)
    //       later: create own templates with own exercise selection
    // TODO: res.status(200)... even necessary? what are the best practices for sending the response?

    app.get('/', (req, res) => { 
        // TODO: define better route (instead of '/')? default-route like '/home' in routing-table?
        // TODO: data (content) has to be written in react and not sent here?
        res.status(200).send('Herakles-fitness')
    });

    app.get('/templates', (req, res) => { // TODO: '/templates' or '/template/all'? what is "cleaner" code?? (I think '/template/all')
        res.status(200).send('list of available templates to start a workout')
    })

    // TODO: should these routes be 'workout/...'?? or 'template/..'?? I think 'template/...' is better!
    // TODO: get methods with ID!!!!
    app.get('template/:id', (req, res) => {
        res.status(200).send(`get template with id={req.params.id}`)
    })

    app.get('/template/fullbody', (req, res) => {
        res.status(200).send('full-body workout')
    });

    app.get('/template/pull', (req, res) => {
        res.status(200).send('pull')
    });

    app.get('/template/push', (req, res) => {
        res.status(200).send('push')
    });

    app.get('/template/legs', (req, res) => {
        res.status(200).send('legs')
    })

    app.get('/template/upperbody', (req, res) => {
        res.status(200).send('upper-body workout')
    })

    app.get('/template/lowerbody', (req, res) => {
        res.status(200).send('lower-body workout')
    })
}

startServer();