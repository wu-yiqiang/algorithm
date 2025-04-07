CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  SET N:=N-1;
  RETURN (
      # Write your MySQL query statement below.
    SELECT ifnull(
        (SELECT
           distinct Salary
        FROM 
            employee
        ORDER BY
            Salary desc  
        limit
            N,1
        ),null
    )
  );
END
