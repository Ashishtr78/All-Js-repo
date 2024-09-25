# Relational operator
 ->it is return boolean value (true,false)
 -> (>,<,<=,>=)(these operator is used)
 -> (==(it is loose equality))
 -> (!=(it is not loose equality))

# {==}loose equality :->
                       ->it can't check data type 
                       ->directly chech it with help of implisite type conversion 
                   
 
 # {===}strict equality :->
                        ->to check data type
                        ->then comprition

# {!=}loose not equality:->
                        ->it can't check data type 
                       ->directly chech it with help of implisite type conversion 
                        ex:-let a=40;
                            let b="0";
                            console.log(a!=b);

# {!==}strict not equality :->
                        ->to check data type
                        ->then comprition
                        ex:-
                            let a=40;
                            let b="40";
                            console.log(a!==b);

# LOGICAL OPERATOR
1. LOGICAL AND(&&):-
                   SYNTAX:-
                            (OP1 &&     OP2)
                              |          |
                      (BOOLEAN VALUE)   (BOOLEAN VALUE)
  :-IT GIVE BOOLEAN VALUE. 
  :-IT TAKE BOTH SIDE BOOLEAN VALUE TO OPERATE IT .
  :-FOR BOTH SIDE TAKE BOOLEAN VALUE WE CAN USE RELATION OPERATOR.  


2.  LOGICAL OR(||):-
                   SYNTAX:-
                            (OP1 ||     OP2)
                              |          |
                      (BOOLEAN VALUE)   (BOOLEAN VALUE)
  :-IT GIVE BOOLEAN VALUE. 
  :-IT TAKE BOTH SIDE BOOLEAN VALUE TO OPERATE IT .
  :-FOR BOTH SIDE TAKE BOOLEAN VALUE WE CAN USE RELATION OPERATOR.  


# ternary operator
1. conditional operator


# literals

1. primitive literals
  
  # type of Primitive literals
  1. NUMBER:- 1>Integer
              2>floating or desimal value
              ex:- 1> var a=34;
                   2> let b=23.44;
             3>Range is:- (-2^53-1) to (2^53 -1)    

  2. BigInt:- 
             1>Range -infinite to infinite
             2> suffix :- 'n'
     for biger integer value store we use is (BIGINT)


 3. NaN:-
          1> it is stand for Not a Number
          2> it is computional error given by js engine
          3> ex:- 
                  const a="hellow";
                  const b=49;
                  c.log(a+b);
                  o/p:- hellow49

                let a="hellow";
                let b=44;
                c.log(a-b)
                o/p:-NaN(Not a Number)    

4. NULL :- 
           1> CONST AKASH_SALARY=null;

# important case

5. undefine :- 
              2> let vikash_salary; --->js engine store in this variable in undefined.
                                    --->(in VAR case)-->undefined will store in it  variable phase
                                    --->(in let case)-->undefined will store in it  execution phase

# ---------------------------------------------------------------------

6. boolean:- 
             let isWorking=false;

7. String:-
            1>it is collection of character

            #--* Types of String --*#

            1>Single Line String:-
                                 ex:- var greet="Good Morning";
            
            2>Multi Line String / Template String:- 
                                 (`  `)back tiks
                                 1> var greet=`good 
                                 morning `;
# interpolatin ${} :-
                     1>it is used to add variable in string data type
                     ex:-
                           var userName=prompt("enter the name);
                           let greet=`good morning ${username};
                            c.log(greet);

8. Symbol :-
             var a="hey";

             let b=Symbol("hey);

             c.log(a===b)--o/p->false
             c.log(b.description)--o/p->hey

# punctuator 
1. Group:- (), {} ,[]
2. Assign:- ":" (coloumn)
3. Seperate:- "," or ";"
4. access:-   . (Dot)

# Scope

1. Global Scope(who decleared in with var datatype)

var a=10;


2. Block Scope/Script Scope(who decleared in with let,const datatype)

let b=23;
const c=34;

# global execution contex
1. variable phase
2. execution phase

# Variable phase
1. it read only decleration part \
   1. global variabal:- var
   2. block variabal :- let , const
# execuion phase
1. it read any things
2. execution start from here

# HOISTING (VIMP)
1. The ability of js engine to access a variable before its decleration statement is known as Hoisting 
2. Hoisting can be done in var,let and const.

# Temporal dead zone
1. it is the time frame beween variable decleration and variable initilization .
2. In this time frame we can not access a variable .
3. variable declered with let and const belong to temporal dead zone.


# type convertion 
1. to convert one type of data into another type is known as type coercion.

# types of type coercion:-
                           it is of 2 type

1. Implicit type coercion:- to convert one type of data into another type automatically(implicit)
                            by js engine is called implicit type coercion.

2. Explicit type coercion:-to convert one type of data to another type forcefully it is called explicit              typecoercion.

# Implicit
 #      Argument                                result
        Number                                  number
        Symbol                                  type error
        BigInt                                  type error
        undefine                                NaN
        null                                     0
        false                                    0
        true                                     1
        String ("1" " ")                         1,0
        String (anythings)                       NaN


# Array method
1. push = it is used to insert last of index.
    ex:- let arr=[10,20,30,40,50];
          arr.push(100);
         output: [10,20,30,40,50,100]




# Object
 1. Syntax:- const   user={                                                                        |
              |         |                        userId:123,  // key value pair                    |state(variable)
              keyword   variable                 iclogin:true,                                     |
                      (object refrence)           userName;"Ravi
                                                userInfo:function()                               |
                                  {                                                               |behavior(method)
                                    c.log(`userNameis:${this.userName}`)                          |
                                  }
                        }
                                           key value
2. Access the object element:-                |
                            1:-   c.log(obj.name)
                                         |
                                       object refrence

                            2:-   c.log(obj["name])



                            <!-- DOM -->

1. Dom tree structure 