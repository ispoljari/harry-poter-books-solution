# Solution to the Harry Poter book set calculator

## Task Description

Once upon a time there was a series of 5 books about a very English hero called Harry. Children all over the world thought he was fantastic, and, of course, so did the publisher. So in a gesture of immense generosity to mankind, (and to increase sales) they set up the following pricing model to take advantage of Harry's magical powers.

One copy of any of the five books costs 8 EUR. If, however, you buy two different books from the series, you get a 5% discount on those two books. If you buy 3 different books, you get a 10% discount. With 4 different books, you get a 20% discount. If you go the whole hog, and buy all 5, you get a huge 25% discount. Note that if you buy, say, four books, of which 3 are different titles, you get a 10% discount on the 3 that form part of a set, but the fourth book still costs 8 EUR. Potter mania is sweeping the country and parents of teenagers everywhere are queuing up with shopping baskets overflowing with Potter books.

Your mission is to write a piece of code to calculate the price of any conceivable shopping basket, giving as big a discount as possible.

For example, how much does this basket of books cost?

·       2 copies of the first book

·       2 copies of the second book

·       2 copies of the third book

·       1 copy of the fourth book

·       1 copy of the fifth book

(answer: 51.20 EUR)

## Additional requirements

The problem needs to be solved using test-driven development: http://en.wikipedia.org/wiki/Test-driven_development Solutions without Unit-tests cannot be considered.

## How to run the program locally

1. git clone
2. cd /harry-poter-assignment
3. npm install
4. npm run test
5. node script.js [2,2,2,1,1]

The input vector into the script is assumed to be an array with 5 numbers. Each number represents a book quantity from different book series.

This is the structure [firstBookQuantity, secondBookQuantity, thirdBookQuantity, fourthBookQuantity, fifthBookQuantity]

So [2,2,2,1,1] means that there are;

2 copies of the first book

2 copies of the second book

2 copies of the third book

1 copy of the fourth book

1 copy of the fift book

## Ideas for additional optimization

Memoize the recursive calls of calcLowestPrice() method to avoid calling it repeatedly with the same argument.
