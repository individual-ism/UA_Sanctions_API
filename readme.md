# Ukraine Sanctions

![Слава Україні | Героям Слава](https://res.cloudinary.com/de6y97wif/image/upload/v1677557197/%D1%81%D0%BB%D0%B0%D0%B2%D0%B0_osvufc.jpg)

## Description
In light of the invasion by Russia on the 24th of February 2022, it is imperative that information be propagated regarding the entities - both individuals and enterprises - which undermine the struggle for freedom. Although some may be compelled to dismiss the war as a "far away" conflict - not warranting the attention of those whose lives are far removed from it - this is the mentality which allowed both world wars to become the abominations they were. The ultimate conclusion of this war has definitive implications and explications on the world entire.

This API is bears information on the Ukrainian sanctions list, as of December 2022. 

## Searching with API
This API can be reached at its primary root at ***https://uasanctions.up.railway.app***. It has two primary components: Persons and Companies. Requests for each should use the following endpoints, with the specific purposes outlined further below:

  - Root: "/"  
  - ID: "/:id"  
  - Name: "/name/:name_en"  

  ### Retrieving All
  To retrieve all companies or persons, use the base root, followed by "/companies" or "/persons", respectively. The URL should reflect one of the following:  

    https://uasanctions.up.railway.app/companies  
    https://uasanctions.up.railway.app/persons  

  ![All Companies](https://res.cloudinary.com/de6y97wif/image/upload/v1677557196/ac_odvob4.png)

  ### Retrieving Individual Records
  To retrieve an individual record for a company or person, use the respective URL under "Retrieving All" and add the required ObjectID after a forward slash. An example of each has been provided below:  

    https://uasanctions.up.railway.app/companies/63add33d63ee199b43d12204  //Central Bank of the Russian Federation (Bank of Russia)  
    https://uasanctions.up.railway.app/persons/63add35b63ee199b43d13ca0  //DOROSHENKO Andrey Nikolaevich 

  ![Individual Record By ID](https://res.cloudinary.com/de6y97wif/image/upload/v1677557198/icbid_xgbbwx.png) 

  ### Retrieving Individual Records By Name
  To retrieve an individual record for a company or person by name, use the respective URL under "Retrieving All" and add "/name/", followed by the name of the company or person sought. 
  
  **N.B.** This function is partially functional; as such, not all records may be discoverable by this method. Names must be entered exactly as they are written within the database. This function was tested in Firefox and spaces were permitted; however, proper syntax replaces the spaces with "%20".
  
  Examples:  

    https://uasanctions.up.railway.app/companies/name/Central%20Bank%20of%20the%20Russian%20Federation%20(Bank%20of%20Russia)  
    https://uasanctions.up.railway.app/persons/name/DOROSHENKO%20Andrey%20Nikolaevich  

  ![Individual Record By Name](https://res.cloudinary.com/de6y97wif/image/upload/v1677557199/ipbn_y9iuhc.png)

  ### Creating New Records
  To generate a new record, all post requests should be sent to the respective URL listed under "Retrieve All". The body of the request must contain the following required fields for both companies and persons: the name in English (name_en), the name in Russian (name_ru), and the company or person ID (company_id; person_id). The comprehensive list of available fields can be found in the "models" folder of the repository, available [here][GitHub_Repository].

  ### Updating Records
  To update a record, put requests must utilize the URL with the ObjectID of the record for which an update is being submitted, similar to the URLs listed under "Retrieving Individual Records". The body of the request must contain the field name, for which the value is to be changed, exactly as it is written in the models of the [GitHub Repository][GitHub_Repository].

  ### Deleting Records
  To delete a record, the URL must utilize the ObjectID for the specific record, similar to the URLs listed under "Retrieving Individual Records". 

## Technology Utilized
 Cors | CSS | Express | HTML | JavaScript | MongoDB | Mongoose | Morgan | Node.js

## Technical Requirements
- Create a functional API utilizing Express and Mongoose
- Develop one or more models with respective RESTful routes and controllers
- Implement full CRUD functionality for each model
- Deploy the API via Railway for public accessibility

## Notes & Issues
- All testing of the API for access - both prior to and following deployment - was conducted utilizing Firefox.
- Final CRUD testing was conducted utilizing [swagger.io][Swagger].
- CSS styling was not applied and will be investigated.

## Potential Amendments & Implementations
1. Create a search bar at the base root to search for records based on partial elements of given fields.
2. Create pathways to accept non-English values, such as for the Russian name.
3. Add token authentication.
4. Translate additional fields into English to make the API more accessible.

![Flag of Ukraine](https://res.cloudinary.com/de6y97wif/image/upload/v1677557214/Ukraine_Flag_mflkgb.jpg)

[GitHub_Repository]: https://github.com/individual-ism/UA_Sanctions_API/
[Swagger]: https://swagger.io/tools/swagger-inspector/
