# Ukraine Sanctions

### Description
In light of the invasion by Russia on the 24th of February 2022, it is imperative that information be propagated regarding the entities - both individuals and enterprises - which undermine the struggle for freedom. Although some may be compelled to dismiss the war as a "far away" conflict - not warranting the attention of those whose lives are far removed from it - this is the mentality which allowed both world wars to become the abominations they were. The ultimate conclusion of this war has definitive implications and explications on the world entire.

This API is bears information on the Ukrainian sanctions list

**слава україні**

### Searching with API
This API has two primary components: Individuals and Companies. Requests for each should use the following endpoints:

##### Companies
 For all companies, or to add a new company to the list, use "/"  
 For a specific company based on ID, use "/:id"  
 For a specific company based on name, use "/name/:name_en"  

 ##### Persons
 For all persons, or to add a new person to the list, use "/"  
 For a specific person based on ID, use "/:id"  
 For a specific person based on name, use "/name/:name_en"  

### Technology Utilized
Express | MongoDB | Mongoose | Node.js | Cors | Morgan


### Potential Amendments & Implementations
1. Translate additional fields into English.