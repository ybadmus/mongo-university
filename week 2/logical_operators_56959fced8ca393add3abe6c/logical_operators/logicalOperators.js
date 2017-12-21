db.movieDetails.find({ $or : [ { "tomato.meter": { $gt: 99 } },
                               { "metacritic": { $gt: 95 } } ] })


db.movieDetails.find({ $and : [ { "metacritic": { $ne: 100 } },
                                { "metacritic" { $exists: true } } ] })


db.movieDetails.updateMany({ $and: [ { "imdb.votes": { $lt: 10000 } }, { "year": {$gte: 2010}}, {"year": {$lte: 2013}} ] }, {$unset: { "tomato.consensus": null }} )

db.movieDetails.find({ $and: [ { "imdb.votes": { $lt: 10000 } }, { "year": { $gte: 2010, $lte: 2013 } } ] })

QUIZ 1 OF WEEK 2
db.movieDetails.find({ "award.oscars": { $elemMatch: {"awards": "bestPicture"} } });

QUIZ 2 OF WEEK 2
db.movieDetails.updateMany({ $and: [ { "imdb.votes": { $lt: 10000 } }, { "year": {$gte: 2010, $lte: 2013}} ] },{$unset: { "tomato.consensus": null }});

