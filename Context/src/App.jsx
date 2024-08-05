import React from "react";
import { ThemeProvider } from "./components/ThemeContext/ThemeContext";
import ThemeButton from "./components/ThemeContext/ThemeButton";
import { AuthProvider } from "./components/AuthContext/AuthContext";
import UserStatus from "./components/AuthContext/UserStatus";
import LoginButton from "./components/AuthContext/LoginButton";
import LogoutButton from "./components/AuthContext/LogoutButton";
import { CartProvider } from "./components/CartContext/CartContext";
import ProductList from "./components/CartContext/ProductList.jsx";
import Cart from "./components/CartContext/Cart.jsx";
import { LanguageProvider } from "./components/LanguageContext/LanguageContext.jsx";
import Greeting from "./components/LanguageContext/Greeting.jsx";
import LanguageSwitcher from "./components/LanguageContext/LanguageSwitcher.jsx";
import ItemList from "./components/UserPreferenceContext.jsx/ItemList.jsx";
import ViewModeSwitcher from "./components/UserPreferenceContext.jsx/ViewModeSwitcher.jsx";
import { UserPreferencesProvider } from "./components/UserPreferenceContext.jsx/UserPreferenceContext.jsx";
import { NotificationProvider } from "./components/NotificationSettingsContext/NotificationSettingsContext.jsx";
import NotificationStatus from "./components/NotificationSettingsContext/NotificationStatus.jsx";
import NotificationToggle from "./components/NotificationSettingsContext/NotificationToggle.jsx";
import { DynamicThemeProvider } from "./components/DynamicThemeContext/DynamicThemeContext.jsx";
import ThemeComponent from "./components/DynamicThemeContext/ThemeComponent.jsx";
import ThemeSelector from "./components/DynamicThemeContext/ThemeSelector.jsx";
import { UserProfileProvider } from "./components/UserProfileContext/UserProfileContext.jsx";
import Profile from "./components/UserProfileContext/Profile.jsx";
import EditProfile from "./components/UserProfileContext/EditProfile.jsx";
import { FavoritesProvider } from "./components/FavoriteContext/FavoritesContext.jsx";
import AddToFavorites from "./components/FavoriteContext/AddToFavorites.jsx";
import FavoritesList from "./components/FavoriteContext/FavoritesList.jsx";
import { AdvancedLanguageProvider } from "./components/AdvancedLanguageContext/AdvancedLanguageContext.jsx";
import LanguageRegionSwitcher from "./components/AdvancedLanguageContext/LanguageRegionSwitcher.jsx";
import LocalizedContent from "./components/AdvancedLanguageContext/LocalizedContent.jsx";
import { LayoutPreferencesProvider } from "./components/LayoutPreferencesContext/LayoutPreferencesContext.jsx";
import LayoutSwitcher from "./components/LayoutPreferencesContext/LayoutSwitcher.jsx";
import StyledComponent from "./components/LayoutPreferencesContext/StyledComponent.jsx";
import "./App.css";

const App = () => {
  return (
    <div className="centro">
      <div className="themeProvider">
        <ThemeProvider>
          <h1>Theme Context</h1>
          <ThemeButton />
        </ThemeProvider>
      </div>

      <div className="line"></div>

      <div className="authProvider">
        <AuthProvider>
          <h1>Auth Context</h1>
          <UserStatus />
          <div className="buttons">
            <LoginButton />
            <LogoutButton />
          </div>
        </AuthProvider>
      </div>

      <div className="line"></div>

      <h1>Cart Context</h1>
      <div className="cartProvider">
        <CartProvider>
          <ProductList />
          <Cart />
        </CartProvider>
      </div>

      <div className="line"></div>

      <div className="languageProvider">
        <LanguageProvider>
          <h1>Language Context</h1>
          <Greeting />
          <LanguageSwitcher />
        </LanguageProvider>
      </div>

      <div className="line"></div>

      <div className="userPreferencerProvider">
        <UserPreferencesProvider>
          <h1>User Preference Context</h1>
          <ItemList />
          <ViewModeSwitcher />
        </UserPreferencesProvider>
      </div>

      <div className="line"></div>

      <div className="notificationProvider">
        <NotificationProvider>
        <h1>Notification Context</h1>
          <NotificationStatus />
          <NotificationToggle />
        </NotificationProvider>
      </div>

      <div className="line"></div>

      <div className="dynamicThemeProvider">
        <DynamicThemeProvider>
        <h1>Dynamic Theme Context</h1>
          <ThemeComponent />
          <ThemeSelector />
        </DynamicThemeProvider>
      </div>

      <div className="line"></div>

      <div className="userProfileProvider">
        <UserProfileProvider>
        <h1>User Profile Context</h1>
          <div className="layoutProfile">
            <Profile />
            <EditProfile />
          </div>
        </UserProfileProvider>
      </div>

      <div className="line"></div>

      <h1>Favorite Context</h1>
      <div className="favoriteProvider">
        <FavoritesProvider>
            <AddToFavorites />
            <FavoritesList />
        </FavoritesProvider>
      </div>

      <div className="line"></div>

      <div className="advancedLanguageProvider">
      <h1>Advanced Language Context</h1>

        <AdvancedLanguageProvider>
            <LanguageRegionSwitcher />
            <LocalizedContent />
        </AdvancedLanguageProvider>
      </div>

      <div className="line"></div>

      <div className="layoutPreferenceProvider">
        <LayoutPreferencesProvider>
        <h1>Layout Preference Context</h1>
            <LayoutSwitcher />
            <StyledComponent />
        </LayoutPreferencesProvider>
      </div>

      <div className="line"></div>
    </div>
  );
};

export default App;
