#An example program in Python
spam_amount = 0
print(spam_amount)

# Ordering Spam, egg, Spam, Spam, bacon and Spam (4 more servings of Spam)
spam_amount = spam_amount + 4

if spam_amount>0:
    print("But I don't want ANY Spam!")
viking_song = "Spam " * spam_amount
print(viking_song)

type(variable)#returns the type of variable

a/b#gives quotient in float value
a//b#gives quotient in integer format
a**b#a to the power of b

min(1,3,4,5,22,3)#returns the minimum value
max(1,3,4,5,22,3)#returns the maximum value
abs(-32)#returns the absolute value
print(float(10))#converts to float


help(print)#returns the help for print function

#Example of a function
def least_difference(a, b, c):
     """Return the smallest difference between any two numbers among a, b and c."""#This is called docstring, it is used to describe the function when help is called
    diff1 = abs(a - b)
    diff2 = abs(b - c)
    diff3 = abs(a - c)
    return min(diff1, diff2, diff3)

print(1, 2, 3, sep=' < ')#sep is used to separate the values by the given value
1 < 2 < 3

round(float(num), ndigits=2)#rounds the number to the given number of digits

LISTS
#Lists are same like arrays in c++ but they can contain different types of data
hands = [['J', 'Q', 'K'], ['2', '2', '2'], ['6', 'A', 'K']]
my_favourite_things = [32, 'raindrops on roses', help,[1,'w',54],"lalala"]#lists can contain different types of data

my_favourite_things[1:3]#gives the elements from 1 till 3 NOT including 3
#This gives the output as ['raindrops on roses', <built-in function help>]  

len(hands)#gives the length of the list
sorted(hands)#sorts the list and returns sorted value
sum(hands)#sums the list and returns the value


# x = 12
# # x is a real number, so its imaginary part is 0.
# print(x.imag)
# # Here's how to make a complex number, in case you've ever been curious:
# c = 12 + 3j
# print(c.imag)

hands.append(['7', '7', '7'])#adds this element at end of the list
hands.pop()#returns and removes the last element from the list
hands.index(3)#returns the index of the element
3 in hands#checks if 3 is present in the list or not

TUPLES
#Same as lists but they are immutable and need parentheses while declaring them
t=(1,2,3)
t=1,2,3 #both are same
my_favourite_things = (32, 'raindrops on roses', help,[1,'w',54],"lalala")
my_favourite_things[0] = 31 ERROR as tuples are immutable
x=0.0124
x.as_integer_ratio()#returns the ratio of the number as TUPLE

LOOPS
for planet in planets:
    print(planet, end=' ')
for i in range(n):
    print(i, end=' ')
print(end=' ')#used to replicate System.out.print() in python as opposed to println


LIST COMPREHENSIONS
squares = [n**2 for n in range(10)]
#this gives the o/p [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
loud_short_planets = [planet.upper() + '!' for planet in planets if len(planet) < 6]

STRINGS
print('Pluto's a planet!')
#here, the 's is considered as the end of the string and the rest is considered as a variable
#to rectify this,we write
      print('Pluto\'s a planet!') #wherev \s is used to escape the 's
    # Triple quoted strings can be used to create multi-line strings or to include special characters literally.
    example = """This is a multi-line string.
    It can span across multiple lines.
    It can also include special characters like \n and \t without escaping them."""
    print(example) 

Strings can be used as lists
planet = 'Pluto'
print(planet[0])#O/P= 'P'
BUT,It is immutable
str.upper()#returns whole string to upper case
str.lower()#returns whole string to lower case
str.index('ha')#returns index of the substring
str.startswith('h')#checks if the string starts with the given substring`
str.endswith('h')#checks if the string ends with the given substring
str.split()#returns a list of words split wherever it is whitespace
str.split("-")#returns a list of words split wherever it is -   
'/'.join([month, day, year])#joins the list of strings with the given string

planet + ", you'll always be the " + str(position) + "th planet to me."
CAN BE WRITTEN AS
"{}, you'll always be the {}th planet to me.".format(planet, position)

"{} weighs about {:.2} kilograms ({:.3%} of Earth's mass). It is home to {:,} Plutonians.".format(
    planet, pluto_mass, pluto_mass / earth_mass, population,
)

DICTIONARIES
numbers = {key:value,key2:value2,key3:value3}
numbers[key1]#gives value1
number[key1]=value11#changes the value of key1 to value11
numbers[key4]=value4#adds this key value pair to the dictionary
'Saturn' in planet_to_initial#checks if the key is present in the dictionary
dict.items()#returns the list of key value pairs
dict.keys()#returns the list of keys
dict.values()#returns the list of values

IMPORTS
import math as mt#to use mt as shorthand for math
mt.pi

from math import *#no need to write math.anything now
print(pi, log(32, 2))
#But,for more than one import,import only the required ones
from math import log, pi
from numpy import asarray
