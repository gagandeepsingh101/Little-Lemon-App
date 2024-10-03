import React from 'react'
import { SectionList, StyleSheet, Text, View } from 'react-native';

type Props = {}
type Item = {
    name: string,
    price: string,
    id?: string

}
type MenuItem = {
    title: string,
    data: Item[]
};
const menuItemsToDisplay: MenuItem[] = [
    {
        title: 'Appetizers',
        data: [
            { name: 'Hummus', price: '$5.00' },
            { name: 'Moutabal', price: '$5.00' },
            { name: 'Falafel', price: '$7.50' },
            { name: 'Marinated Olives', price: '$5.00' },
            { name: 'Kofta', price: '$5.00' },
            { name: 'Eggplant Salad', price: '$8.50' },
        ],
    },
    {
        title: 'Main Dishes',
        data: [
            { name: 'Lentil Burger', price: '$10.00' },
            { name: 'Smoked Salmon', price: '$14.00' },
            { name: 'Kofta Burger', price: '$11.00' },
            { name: 'Turkish Kebab', price: '$15.50' },
        ],
    },
    {
        title: 'Sides',
        data: [
            { name: 'Fries', price: '$3.00', id: '11K' },
            { name: 'Buttered Rice', price: '$3.00' },
            { name: 'Bread Sticks', price: '$3.00' },
            { name: 'Pita Pocket', price: '$3.00' },
            { name: 'Lentil Soup', price: '$3.75' },
            { name: 'Greek Salad', price: '$6.00' },
            { name: 'Rice Pilaf', price: '$4.00' },
        ],
    },
    {
        title: 'Desserts',
        data: [
            { name: 'Baklava', price: '$3.00' },
            { name: 'Tartufo', price: '$3.00' },
            { name: 'Tiramisu', price: '$5.00' },
            { name: 'Panna Cotta', price: '$5.00' },
        ],
    },
];
const RenderMenuList = (props: Props) => {
    return (
        <View>
            <SectionList
                sections={menuItemsToDisplay}
                data={menuItemsToDisplay}
                renderSectionHeader={({ section: { title } }) => <ItemHeading heading={title}></ItemHeading>}
                renderItem={({ item }: { item: Item }) => <Item item={item}></Item>}
            />
        </View>

    )
}

const Item: React.FC<{ item: Item }> = ({ item }) => {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
        </View>
    );
};
const ItemHeading: React.FC<{ heading: string }> = ({ heading }) => {
    return (
        <View style={styles.sectionHeadingView}>
            <Text style={styles.sectionHeading}>{heading}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        paddingHorizontal: 20,
        paddingVertical: 30,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    itemName: {
        fontSize: 18,
        color: '#F4CE14',

    },
    itemPrice: {
        fontSize: 16,
        color: '#F4CE14',
    },
    sectionHeadingView: {
        backgroundColor: "#F4CE14",
        padding: 10,
    },
    sectionHeading: {
        fontSize: 30,
        fontWeight: "bold",
        color: "black",
        textAlign: "center"
    }
});


export default RenderMenuList