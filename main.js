// Your code here.
//------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------//

/****************
 * GET FIRST NAME *
 ****************/
const getFirstName = function(person){
  return person.firstName;
}

//------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------//

/***************
* GET LAST NAME *
 ***************/
const getLastName = function(person){
  return person.lastName;
}

//------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------//


/***************
 * GET FULL NAME *
 ***************/
const getFullName = function(person){
  return `${person.firstName} ${person.lastName}`

}

//------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------//

/******************
 * SET FIRST NAME *
 ******************/
//changes value of person.firstName
// to the given first name

const setFirstName = function (personObject, newFirstName){
  personObject.firstName = newFirstName
  
}


//------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------//

/***********
 * SET AGE *
 ***********/
const setAge = function(personObject, addAge){
  personObject.age = addAge
}

//------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------//

/*****************
 * GIVE BIRTHDAY *
 *****************/

const giveBirthday = function(personObject){
  personObject.age = 1
  if(personObject.includes('age')){
    console.log('yes')
  }

}


//------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------//

/*********
 * MARRY *
 *********/
//sets the marital status of both given people to true

const marry = function (spouse1Object, spouse2Object){
  spouse1Object.married = true
  spouse2Object.married = true

  spouse1Object.spouseName = spouse2Object.firstName + ' ' + spouse2Object.lastName
  spouse2Object.spouseName = spouse1Object.firstName + ' ' + spouse1Object.lastName

}



//------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------//
/***********
 * DIVORCE *
 ***********/
const divorce = function (spouse1Object, spouse2Object){
  spouse1Object.married = false
  spouse2Object.married = false

  delete spouse1Object.spouseName 
  delete spouse2Object.spouseName 

}





// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
