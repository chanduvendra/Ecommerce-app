import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import ButtonBox from "../../components/ButtonBox";
import Chart from "../../components/Chart";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import ProductListHeading from "../../components/ProductListHeading";
import ProductListItem from "../../components/ProductListItem";
import { deleteProduct } from "../../redux/actions/otherAction";
import { getAdminProducts } from "../../redux/actions/productAction";
import { colors, defaultStyle, formHeading } from "../../styles/styles";
import { useAdminProducts, useMessageAndErrorOther } from "../../utils/hooks";

const AdminPanel = ({ navigation }) => {
  const dispatch = useDispatch();
  const { loading, products } = useAdminProducts(dispatch);

  // Calculate inStock and outOfStock counts
  const inStockCount = products.filter((product) => product.stock > 0).length;
  const outOfStockCount = products.filter((product) => product.stock <= 0).length;

  const navigationHandler = (screenName) => {
    navigation.navigate(screenName);
  };

  const deleteProductHandler = (id) => {
    dispatch(deleteProduct(id));
  };

  const loadingDelete = useMessageAndErrorOther(dispatch, null, null, getAdminProducts);

  return (
    <View style={defaultStyle}>
      <Header back={true} />
      {/* Heading */}
      <View style={{ paddingTop: 70, marginBottom: 20 }}>
        <Text style={formHeading}>Admin Panel</Text>
      </View>

      {loading ? (
        <Loader />
      ) : (
        <>
          <View
            style={{
              backgroundColor: colors.color3,
              borderRadius: 20,
              alignItems: "center",
            }}
          >
            {/* Pass inStockCount and outOfStockCount to the Chart component */}
            <Chart inStock={inStockCount} outOfStock={outOfStockCount} />
          </View>

          <View>
            <View
              style={{
                flexDirection: "row",
                margin: 10,
                justifyContent: "space-between",
              }}
            >
              <ButtonBox
                icon={"plus"}
                text={"Product"}
                handler={() => navigationHandler("newproduct")}
              />

              <ButtonBox
                icon={"format-list-bulleted-square"}
                text={"All Orders"}
                handler={() => navigationHandler("adminorders")}
                reverse={true}
              />
              <ButtonBox
                icon={"plus"}
                text={"Category"}
                handler={() => navigationHandler("categories")}
              />
            </View>
          </View>

          <ProductListHeading />

          <ScrollView showsVerticalScrollIndicator={false}>
            {!loadingDelete &&
              products.map((item, index) => (
                <ProductListItem
                  navigate={navigation}
                  deleteHandler={deleteProductHandler}
                  key={item._id}
                  id={item._id}
                  i={index}
                  price={item.price}
                  stock={item.stock}
                  name={item.name}
                  category={item.category?.category}
                  imgSrc={item.images[0].url}
                />
              ))}
          </ScrollView>
        </>
      )}
    </View>
  );
};

export default AdminPanel;
