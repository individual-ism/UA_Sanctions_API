# Ukraine Sanctions

### Description
In light of the invasion by Russia on the 24th of February 2022, it is imperative that information be propagated regarding the entities - both individuals and enterprises - which undermine the struggle for freedom. Although some may be compelled to dismiss the war as a "far away" conflict - not warranting the attention of those whose lives are far removed from it - this is the mentality which allowed both world wars to become the abominations they were. The ultimate conclusion of this war has definitive implications and explications on the world entire.

This API is bears information on the Ukrainian sanctions list, as of December 2022. 

**слава україні**

### Searching with API
This API can be reached at its primary root at ***https://api-project-production-8128.up.railway.app***. It has two primary components: Persons and Companies. Requests for each should use the following endpoints:

  #### Retrieving All
  To retrieve all companies or persons, use the base root, followed by "/companies" or "/persons", respectively. The URL should reflect one of the following:  

    ***https://api-project-production-8128.up.railway.app/companies***  
    ***https://api-project-production-8128.up.railway.app/persons***  

  #### Retrieving Individual Records
  To retrieve an individual record for a company or person, use the respective URL under "Retrieving All" and add the required ObjectID after a forward slash. An example of each has been provided below:  

    ***https://api-project-production-8128.up.railway.app/companies/63add33d63ee199b43d12204***  //Central Bank of the Russian Federation (Bank of Russia)  
    ***https://api-project-production-8128.up.railway.app/persons/63add35b63ee199b43d13ca0***  //DOROSHENKO Andrey Nikolaevich  

  #### Retrieving Individual Records By Name
  To retrieve an individual record for a company or person by name, use the respective URL under "Retrieving All" and add "/name/", followed by the name of the company or person sought. 
  
  **N.B.** This function is partially functional; as such, not all records may be discoverable by this method. Names must be entered exactly as they are written within the database. This function was tested in Firefox and spaces were permitted; however, proper syntax replaces the spaces with "%20".
  
  Examples:  

    ***https://api-project-production-8128.up.railway.app/companies/name/Central%20Bank%20of%20the%20Russian%20Federation%20(Bank%20of%20Russia)***  
    ***https://api-project-production-8128.up.railway.app/persons/name/DOROSHENKO%20Andrey%20Nikolaevich***  

  #### Creating New Records
  To generate a new record, all requests should be sent to the respective URL listed under "Retrieve All". The required fields for both companies and persons are the name in English (name_en), the name in Russian (name_ru), and the company or person ID (company_id; person_id). The comprehensive list of available fields can be found in the "models" folder of the repository, available [here][GitHub_Repository].

### Technology Utilized
Express | MongoDB | Mongoose | Node.js | Cors | Morgan

### Potential Amendments & Implementations
1. Translate additional fields into English.

[GitHub_Repository]: https://github.com/individual-ism/api-project