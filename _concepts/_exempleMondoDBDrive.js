// https://www.mongodb.com/developer/languages/javascript/node-crud-tutorial/?utm_campaign=devrel&utm_source=youtube&utm_medium=shownotes&utm_term=jesse.hall#update

// connect to MongoDB
const { MongoClient } = require('mongodb')
// Username: EstudoDB
// Passworde: tTU5Q3lSONqVTIGl
// IP: 152.249.126.152/32
// mongodb+srv://EstudoDB:<password>@cluster0.dcsmorb.mongodb.net/?retryWrites=true&w=majority

async function main() {
    const uri = 'mongodb+srv://EstudoDB:tTU5Q3lSONqVTIGl@cluster0.dcsmorb.mongodb.net/?retryWrites=true&w=majority'
    const client = new MongoClient(uri)
    try {
        await client.connect()
        console.log(`Conectado
        `)
// // view all database
//         await listDatabases(client)
// // Create new ONE DATA in sample_airbn inside collection listingsAndReviews
//         await createListing(client, {
//             name: "James Saint",
//             summary: "A confortable apartament in Mooca",
//             bedrooms: 2,
//             bathrooms: 1
//         })
// // Create new MANY DATA in sample_airbn inside collection listingsAndReviews
//         await createMultipleListing(client, [
//             {
//                 name: "Sarita Carneiro",
//                 summary: "A confortable apartament in Santana",
//                 bedrooms: 1,
//                 bathrooms: 1
//             },
//             {
//                 name: "Aleks Saint",
//                 summary: "A confortable apartament in Piqueri",
//                 bedrooms: 2,
//                 bathrooms: 1
//             },
//             {
//                 name: "Mary Saint",
//                 summary: "A confortable house in Maua",
//                 bedrooms: 3,
//                 bathrooms: 2
//             }
//         ])
// // Read ONE DATA in sample_airbn inside collection listingsAndReviews
//         await findOneListingByName(client, "James Saint")
//         await findOneListingByName(client, "James Sain")
// // Read which register with minimum bedroom e which most recente add
    //    await findListingsWithMinimumBedroomsBathroomsAndMostRecentReviews(client, {
    //        minimumNumberOfBedrooms: 4,
    //        minimumNumberOfBathrooms: 2,
    //        maximumNumberOfResults: 10
    //    })
// // Update only one document
// await updateListingByName(client, "James Saint", { bedrooms: 6, beds: 8 })
// // Update document OR Create documente if doesn't exist
// await upsertListingByName(client, "Cozy Cottage", { name: "Cozy Cottage", bedrooms: 3, bathrooms: 1 })
// // Update MANY documents
// // Add FIELD 'property_type' in all documents
// await updateAllListingsToHavePropertyType(client)
// // Change field 'property_type' "Unknown" to 0
// await updateAllListingsToHavePropertyType(client, "Unknown", {property_type : 0} )
// Delete ONE document
// await deleteListingByName(client, "Cozy Cottage");
// Delete MANY documents
await deleteListingsScrapedBeforeDate(client, 0);


    } catch (error) {
        console.log(error)
    } finally {
        await client.close()
    }
}
main().catch(console.error)

// // list all Collections (Tables)
// async function listDatabases(client){
//     const databaseList = await client.db().admin().listDatabases()
//     console.log('Databases:')
//     databaseList.databases.forEach(db => {
//         console.log(`- ${db.name}`)
//     })
// }
// // create new ONE documents in sample_airbn inside collection listingsAndReviews (view line 17)
// async function createListing(client, newListing) {
// //                                   DataBase Name                 Collection Name
//     const result = await client.db('sample_airbnb').collection('listingsAndReviews').insertOne(newListing)
//     console.log(`Nova lista criada com o seguinte id: ${result.insertedId}`)
// }
// // create new MANY documents in sample_airbn inside collection listingsAndReviews (view line 23)
// async function createMultipleListing(client, newListing) {
// //                                   DataBase Name                 Collection Name
//     const result = await client.db('sample_airbnb').collection('listingsAndReviews').insertMany(newListing)
//     console.log(`${result.insertedCount} novas listas criadas com os seguintes Id's`)
//     console.log(result.insertedIds)
// }
// // Read ONE document in sample_airbn inside collection listingsAndReviews (view line 44)
// async function findOneListingByName(client, nameOfListing) {
//     //                                   DataBase Name                 Collection Name
//         const result = await client.db('sample_airbnb').collection('listingsAndReviews').findOne({name: nameOfListing})
//         if (result) {
//             console.log(`Encontrado um regsitro com o nome ${nameOfListing}`)
//             console.log(result)
//         } else {
//             console.log(`
// ${nameOfListing} não foi encontrado`)
//         }
//     }
// // Read which register with minimum bedroom e which most recente add (view line 49)
// async function findListingsWithMinimumBedroomsBathroomsAndMostRecentReviews(client, {
//     minimumNumberOfBedrooms = 0,
//     minimumNumberOfBathrooms = 0,
//     maximumNumberOfResults = Number.MAX_SAFE_INTEGER
// } = {}) {
//     const cursor = client.db('sample_airbnb').collection('listingsAndReviews').find(
//         {
//         bedrooms: {$gte: minimumNumberOfBedrooms},
//         bathrooms: {$gte: minimumNumberOfBathrooms}
//     }
// //               |-> collection atribute
//     ).sort({ last_review: -1 })
// //                         |-> 1 crescent / -1 decresing
//         .limit(maximumNumberOfResults)
// // $gte -> QUERY AND PROJECTION OPERATOR Greather Than or Equal
// // https://www.mongodb.com/docs/v6.0/reference/operator/query/gte/
// // short() -> MongoDB Wire Protocol -> Cursor Methods
// // https://www.mongodb.com/docs/manual/reference/method/cursor.sort/
// // limit() -> MongoDB Wire Protocol -> Cursor Methods
// // https://www.mongodb.com/docs/manual/reference/method/cursor.limit/

//     const results = await cursor.toArray()

//     if (results.length > 0) {
//         console.log(`Found listing(s) with at least ${minimumNumberOfBedrooms} bedrooms and ${minimumNumberOfBathrooms} bathrooms:`)
//         results.forEach((result, i) => {
//             date = new Date(result.last_review).toDateString()

//             console.log()
//             console.log(`${i + 1}. name: ${result.name}`)
//             console.log(`   _id: ${result._id}`)
//             console.log(`   bedrooms: ${result.bedrooms}`)
//             console.log(`   bathrooms: ${result.bathrooms}`)
//             console.log(`   most recent review date: ${new Date(result.last_review).toDateString()}`)
//         })
//     } else {
//         console.log(`No listings found with at least ${minimumNumberOfBedrooms} bedrooms and ${minimumNumberOfBathrooms} bathrooms`)
//     }
// }
// // Update - $inc / $set / $unset
// // Update only one document (view line 55)
// async function updateListingByName(client, nameOfListing, updatedListing) {
//     const result = await client.db('sample_airbnb').collection('listingsAndReviews')
//                         .updateOne({ name: nameOfListing }, { $set: updatedListing })
// // $set -> https://www.mongodb.com/docs/v5.0/tutorial/update-documents-with-aggregation-pipeline/
//     console.log(`${result.matchedCount} documentos(s) encontrados.`)
//     console.log(`${result.modifiedCount} documentos(s) foram atualizados.`)
// }
// // Update document OR Create documente if doesn't exist (view line 57)
// async function upsertListingByName(client, nameOfListing, updatedListing) {
//     const result = await client.db("sample_airbnb").collection("listingsAndReviews")
//                         .updateOne({ name: nameOfListing },
//                                    { $set: updatedListing },
//                                    { upsert: true })
// // upsert -> if TRUE -> create a new document / else -> update document
//     console.log(`${result.matchedCount} documentos(s) encontrados.`)

//     if (result.upsertedCount > 0) {
//         console.log(`Documento inserido com o id ${result.upsertedId}`)
//     } else {
//         console.log(`${result.modifiedCount} documentos(s) foram atualizados.`)
//     }
// }
// // Update MANY document (view line 62 and 64)
// // Add FIELD 'property_type' in all documents
// async function updateAllListingsToHavePropertyType(client) {
//     const result = await client.db("sample_airbnb").collection("listingsAndReviews")
//                         .updateMany({ property_type: { $exists: false } },
//                                     { $set: { property_type: "Unknown" } })
//     console.log(`${result.matchedCount} documentos(s) encontrados.`)
//     console.log(`${result.modifiedCount} documentos(s) foram atualizados.`)
// }
// // Change field 'property_type' "Unknown" to '0'
// async function updateAllListingsToHavePropertyType(client, property_typeOfListing, property_typeUpdatedListing) {
//     const result = await client.db("sample_airbnb").collection("listingsAndReviews")
//                         .updateMany(
//                             { property_type: property_typeOfListing},
//                             { $set: property_typeUpdatedListing}
//                         )
//     console.log(`${result.matchedCount} documentos(s) encontrados.`)
//     console.log(`${result.modifiedCount} documentos(s) foram atualizados.`)
// }
// // Delete ONE document (view line 66)
// async function deleteListingByName(client, nameOfListing) {
//     const result = await client.db("sample_airbnb").collection("listingsAndReviews")
//             .deleteOne({ name: nameOfListing })
//     console.log(`${result.deletedCount} documento apagado.`)
// }
// Delete MANY document (view line 68)
async function deleteListingsScrapedBeforeDate(client, field) {
    const result = await client.db("sample_airbnb").collection("listingsAndReviews")
        .deleteMany({ "property_type": { $eq: field } });
    console.log(`${result.deletedCount} documento(s) apagado(s).`);
}