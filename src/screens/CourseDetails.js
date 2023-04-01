import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Courses from "../api/Courseapi";

const CourseDetails = ({navigation, route}) => {
    const id = route.params.courseId;
    console.log(id);

    const selectedCourse = Courses.find((element) =>{
        return id === element.id
        });       


        return (
            <View style={styles.mainContainer}>
                <View style={styles.courseContainer}>
                    <View>
                        <Image style={styles.cardImage}
                            source={selectedCourse.image}
                            resizeMode= "contain"
                            />
                    </View> 
                    <Text style={styles.mainHeader}>
                        {selectedCourse.title}
                    </Text>
                    
                    <Text style={styles.description}>
                        {selectedCourse.description}
                    </Text>

                    <Text style={styles.description}>
                        {selectedCourse.course1}
                    </Text>

                    <Text style={styles.description}>
                        {selectedCourse.course2}
                    </Text>

                    <Text style={styles.description}>
                        {selectedCourse.course3}
                    </Text>

                <View style={styles.buttonContainer}>
                    <Text style= {styles.price}>{selectedCourse.price}</Text>
                    <TouchableOpacity
                     style= {styles.buttonStyle}
                     onPress={() => navigation.navigate("Course)")}>


                        <Text style= {styles.buttonText}>Join Now</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
        );
};

const styles = StyleSheet.create({
    cardImage: {
        width: "100%",
        height: undefined,
        aspectRatio: 1,
    },

    mainContainer:{
        paddingHorizontal:20,
        
    },

    courseContainer: {
        padding:30,
        backgroundColor:"rgba(255,255,255,0.90)",
        textAlign:"center",
        borderRadius:5,
        shadowColor:"grey",
        shadowOffset:{width:0, height:0},
        shadowOpacity:0.5,
        shadowRadius:8,
        elevation: 8,
        marginVertical:30,
    },

    mainHeader:{
        fontSize:22,
        color: "#344055",
        textTransform:"uppercase",
        paddingBottom:15,
        textAlign: "center",
        fontFamily: "JosefinSans_500Medium",
    },

    description: {
        textAlign: "left",
        fontFamily: "JosefinSans_400Regular",
        paddingBottom:15,
        lineHeight:20,
        fontSize:16,
        color:"#7d7d7d",
    },

    buttonContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
    },

    buttonStyle:{
        backgroundColor:"#809fff",
        borderRadius:5,
        paddingVertical:10,
        paddingHorizontal:20,
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },

    buttonText:{
        fontSize:20,
        color:"#eee",
        fontFamily: "JosefinSans_500Medium",
        textTransform:"capitalize",
    },



})

export default CourseDetails;

