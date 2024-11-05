import { Image, StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';

export default function FlatListPage() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Leader Board</Text>
                <View style={styles.leaderRow}>
                    {["Maruf", "Sabbir", "Morsed"].map((item, index) => (
                        <View key={index} style={[styles.leaderBox, index !== 1 && { marginTop: 40 }]}>
                            <View style={styles.imageContainer}>
                                <Image
                                    style={styles.image}
                                    source={require('../assets/images/logomy.jpeg')}
                                />
                                <Text style={styles.nameText}>{item}</Text>
                            </View>
                            <Text style={styles.rankText}>{index + 1}</Text>
                        </View>
                    ))}
                </View>
            </View>
            <View style={styles.body}>
                <FlatList
                    data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1]}
                    renderItem={({ item, index }) => (
                        <View style={styles.itemContainer}>
                            <View style={{ flexDirection: "row", gap: 10, justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>{index + 1}</Text>
                                <Image
                                    style={styles.imageFlat}
                                    source={require('../assets/images/logomy.jpeg')}
                                />
                                <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>Md Morsed Alam</Text>
                            </View>
                            <Text style={styles.itemText}>{500 + item}</Text>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#282b36",
    },
    header: {
        backgroundColor: "#1b1d28",
        paddingBottom:30,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    title: {
        textAlign: "center",
        fontSize: 22,
        fontWeight: "bold",
        color: "white",
        marginTop: 20,
    },
    leaderRow: {
        flexDirection: 'row',
        justifyContent: "space-between",
        padding: 20,
    },
    leaderBox: {
        justifyContent: "center",
        alignItems: "center",
    },
    imageContainer: {
        gap: 10,
        backgroundColor: "#282b36",
        padding: 10,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 20,
        resizeMode: "cover",
    },
    nameText: {
        color: "white",
        fontSize: 18,
        fontWeight: "600",
    },
    imageFlat: {
        width: 50,
        height: 50,
        borderRadius: 50,
        resizeMode: "cover",
    },
    rankText: {
        backgroundColor: "orange",
        width: 30,
        height: 30,
        padding: 6,
        textAlign: "center",
        borderRadius: 15,
        color: "white",
        fontWeight: "bold",
        position: "absolute",
        bottom: -20,
    },
    body: {
        flex: 1,
    },
    itemContainer: {
        padding: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
    },
    itemText: {
        color: "orange",
        fontSize: 20,
        fontWeight: "bold",
    },
});
