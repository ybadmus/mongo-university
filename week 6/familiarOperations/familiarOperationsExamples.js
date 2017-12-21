
db.companies.aggregate([
    { $match: { founded_year: 2004 } },
])



db.companies.aggregate([
    { $match: { founded_year: 2004 } },
    { $project: {
        _id: 0,
        name: 1,
        founded_year: 1
    } }
])



db.companies.aggregate([
    { $match: { founded_year: 2004 } },
    { $limit: 5 },
    { $project: {
        _id: 0,
        name: 1 } }
])



db.companies.aggregate([
    { $match: { founded_year: 2004 } },
    { $sort: { name: 1} },
    { $limit: 5 },
    { $project: {
        _id: 0,
        name: 1 } }
])



// Take care with the order in which you specify sort skip and limit
db.companies.aggregate([
    { $match: { founded_year: 2004 } },
    { $limit: 5 },
    { $sort: { name: 1} },
    { $project: {
        _id: 0,
        name: 1 } }
])



db.facebook.aggregate([
    { $match: { founded_year: 2004 } },
    { $sort: { name: 1} },
    { $skip: 10 },
    { $limit: 5 },
    { $project: {
        _id: 0,
        name: 1 } },
])

db.grades.aggregate([
    { $match: { type: "exam" } },
    { $sort: { student_id: 1} },
    { $skip: 10 },
    { $limit: 5 },
    { $project: {
        type: 1 } }
])


db.students.aggregate([
    { $match: { student_id: 100000 } },
    { $unwind: "$scores"},
    { $project: {
        scores: 1 } }
])

{ "_id" : ObjectId("59081ce489fd9a48868b141e"), 
"student_id" : 1, 
"scores" : [ { "type" : "exam", "score" : 75.35122876484195 }, 
{ "type" : "quiz", "score" : 94.33259583126083 }, 
{ "type" : "homework", "score" : 59.27601815473798 }, 
{ "type" : "homework", "score" : 34.16661134302785 } ], "class_id" : 475 }

