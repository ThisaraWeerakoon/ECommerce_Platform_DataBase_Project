-- 1. Display the first and last names of all actors from the table actor.
SELECT first_name, last_name
FROM actor;

-- 2. Display the first and last name of each actor in a single column in upper case letters. Name
-- the column Actor Name.
SELECT CONCAT(UPPER(first_name), ' ', UPPER(last_name)) AS "Actor Name"
FROM actor;

-- 3. You need to find the ID number, first name, and last name of an actor, of whom you know
-- only the first name, "Joe." Write a query to retreive the corresponding information.
-- 4. Find all actors whose last name contain the letters GEN
-- 5. Find all actors whose last names contain the letters LI. Order the rows by last name and
-- first name

SELECT actor_id ,first_name, last_name
FROM actor
WHERE first_name -"Joe";

SELECT *
FROM actor
WHERE last_name LIKE '%GEN%';

SELECT *
FROM actor
WHERE last_name LIKE '%LI%'
ORDER BY first_name, last_name;	

-- 6. Using IN, display the country_id and country columns of the following countries:
-- Afghanistan, Bangladesh, and China
-- 7. Add a middle_name column to the table actor. Position it between first_name and
-- last_name.
-- 8. You realize that some of these actors have tremendously long last names. Change the
-- data type of the middle_name column to blobs

SELECT country_id ,country 
FROM country c
WHERE c.country IN ('Afghanistan', 'Bangladesh', 'China');

-- Add a middle_name column to the actor table.
ALTER TABLE actor
ADD COLUMN middle_name VARCHAR(50) AFTER first_name;

ALTER TABLE actor
MODIFY COLUMN middle_name BLOB;

-- 9. List the last names of actors, as well as how many actors have that last name.
-- 10. List last names of actors and the number of actors who have that last name, -- but only
-- for names that are shared by at least two actors

SELECT last_name, count(last_name)
FROM actor
group by last_name;

SELECT last_name, count(last_name) AS name_count
FROM actor
group by last_name
	HAVING name_count >= 2
Order BY name_count;

-- 11. Use JOIN to display the first and last names, as well as the address, of each staff member.
-- Use the tables staff and address:
-- 12. Use JOIN to display the total amount rung up by each staff member in August of 2005.
-- Use tables staff and payment.



SELECT first_name, last_name, address
FROM staff s
JOIN address a
    USING (address_id);

SELECT s.first_name, 
    SUM(p.amount) AS "Total Amount",
    COUNT(p.amount) AS "Number of Payments"
FROM payment p
JOIN staff s
    USING (staff_id)
WHERE p.payment_date LIKE '2005-08%'
GROUP BY s.first_name;

