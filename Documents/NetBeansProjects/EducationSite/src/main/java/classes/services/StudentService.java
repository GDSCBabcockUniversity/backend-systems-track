/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package classes.services;

import classes.Student;
import java.time.LocalDate;
import java.time.Month;
import java.util.List;
import org.springframework.stereotype.Service;

/**
 *
 * @author HP
 */
@Service
public class StudentService{ 
        public List<Student> getStudents(){
        return List.of(
                new Student(
                        211411L,
                        "Emmanuella",
                        "chukwumaemmanuella03@gmail.com",
                        LocalDate.of(2005, Month.MAY, 5),
                        17        
                    )
                );
            }
}
