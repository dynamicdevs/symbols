import { Component, h, Host, Prop } from '@stencil/core';
import { StyleType } from '../../types';

import dynamicSolid from '../../assets/icons/solid/ic_dynamic.svg';
import symbolSolid from '../../assets/icons/solid/ic_symbol.svg';
import arrowDownSolid from '../../assets/icons/solid/ic_arrow_down.svg';
import arrowLeftSolid from '../../assets/icons/solid/ic_arrow_left.svg';
import arrowRightSolid from '../../assets/icons/solid/ic_arrow_right.svg';
import arrowUpSolid from '../../assets/icons/solid/ic_arrow_up.svg';
import bellSolid from '../../assets/icons/solid/ic_bell.svg';
import briefcaseSolid from '../../assets/icons/solid/ic_briefcase.svg';
import calendarSolid from '../../assets/icons/solid/ic_calendar.svg';
import cartSolid from '../../assets/icons/solid/ic_cart.svg';
import clockSolid from '../../assets/icons/solid/ic_clock.svg';
import copySolid from '../../assets/icons/solid/ic_copy.svg';
import dashboardSolid from '../../assets/icons/solid/ic_dashboard.svg';
import downloadSolid from '../../assets/icons/solid/ic_download.svg';
import emailSolid from '../../assets/icons/solid/ic_email.svg';
import exitSolid from '../../assets/icons/solid/ic_exit.svg';
import externalLinkSolid from '../../assets/icons/solid/ic_external_link.svg';
import eyeHiddenSolid from '../../assets/icons/solid/ic_eye_hidden.svg';
import eyeViewSolid from '../../assets/icons/solid/ic_eye_view.svg';
import facebookSolid from '../../assets/icons/solid/ic_facebook.svg';
import figmaSolid from '../../assets/icons/solid/ic_figma.svg';
import filterAsSolid from '../../assets/icons/solid/ic_filter_as.svg';
import filterDesSolid from '../../assets/icons/solid/ic_filter_des.svg';
import filterSortSolid from '../../assets/icons/solid/ic_filter_sort.svg';
import filterSolid from '../../assets/icons/solid/ic_filter.svg';
import githubSolid from '../../assets/icons/solid/ic_github.svg';
import gitlabSolid from '../../assets/icons/solid/ic_gitlab.svg';
import houseSolid from '../../assets/icons/solid/ic_house.svg';
import importantSolid from '../../assets/icons/solid/ic_important.svg';
import informationSolid from '../../assets/icons/solid/ic_information.svg';
import instagramSolid from '../../assets/icons/solid/ic_instagram.svg';
import kofiSolid from '../../assets/icons/solid/ic_kofi.svg';
import linkedinSolid from '../../assets/icons/solid/ic_linkedin.svg';
import listSolid from '../../assets/icons/solid/ic_list.svg';
import locationSolid from '../../assets/icons/solid/ic_location.svg';
import menuLeftSolid from '../../assets/icons/solid/ic_menu_left.svg';
import menuRightSolid from '../../assets/icons/solid/ic_menu_right.svg';
import menuTwoSolid from '../../assets/icons/solid/ic_menu_two.svg';
import menuSolid from '../../assets/icons/solid/ic_menu.svg';
import messageSolid from '../../assets/icons/solid/ic_message.svg';
import microphoneSolid from '../../assets/icons/solid/ic_microphone.svg';
import minusSolid from '../../assets/icons/solid/ic_minus.svg';
import moneySolid from '../../assets/icons/solid/ic_money.svg';
import moonSolid from '../../assets/icons/solid/ic_moon.svg';
import negativeSolid from '../../assets/icons/solid/ic_negative.svg';
import notionSolid from '../../assets/icons/solid/ic_notion.svg';
import peopleSolid from '../../assets/icons/solid/ic_people.svg';
import personSolid from '../../assets/icons/solid/ic_person.svg';
import plusSolid from '../../assets/icons/solid/ic_plus.svg';
import positiveSolid from '../../assets/icons/solid/ic_positive.svg';
import questionSolid from '../../assets/icons/solid/ic_question.svg';
import rowsSolid from '../../assets/icons/solid/ic_rows.svg';
import searchSolid from '../../assets/icons/solid/ic_search.svg';
import settingsSolid from '../../assets/icons/solid/ic_settings.svg';
import shareSolid from '../../assets/icons/solid/ic_share.svg';
import speakSolid from '../../assets/icons/solid/ic_speak.svg';
import spotifySolid from '../../assets/icons/solid/ic_spotify.svg';
import squareSolid from '../../assets/icons/solid/ic_square.svg';
import starSolid from '../../assets/icons/solid/ic_star.svg';
import sunSolid from '../../assets/icons/solid/ic_sun.svg';
import tagSolid from '../../assets/icons/solid/ic_tag.svg';
import tiktokSolid from '../../assets/icons/solid/ic_tiktok.svg';
import trashSolid from '../../assets/icons/solid/ic_trash.svg';
import twitchSolid from '../../assets/icons/solid/ic_twitch.svg';
import twitterSolid from '../../assets/icons/solid/ic_twitter.svg';
import uploadSolid from '../../assets/icons/solid/ic_upload.svg';
import warningSolid from '../../assets/icons/solid/ic_warning.svg';
import youtubeSolid from '../../assets/icons/solid/ic_youtube.svg';

import dynamicOutline from '../../assets/icons/outline/ic_dynamic.svg';
import symbolOutline from '../../assets/icons/outline/ic_symbol.svg';
import arrowDownOutline from '../../assets/icons/outline/ic_arrow_down.svg';
import arrowLeftOutline from '../../assets/icons/outline/ic_arrow_left.svg';
import arrowRightOutline from '../../assets/icons/outline/ic_arrow_right.svg';
import arrowUpOutline from '../../assets/icons/outline/ic_arrow_up.svg';
import bellOutline from '../../assets/icons/outline/ic_bell.svg';
import briefcaseOutline from '../../assets/icons/outline/ic_briefcase.svg';
import calendarOutline from '../../assets/icons/outline/ic_calendar.svg';
import cartOutline from '../../assets/icons/outline/ic_cart.svg';
import clockOutline from '../../assets/icons/outline/ic_clock.svg';
import copyOutline from '../../assets/icons/outline/ic_copy.svg';
import dashboardOutline from '../../assets/icons/outline/ic_dashboard.svg';
import downloadOutline from '../../assets/icons/outline/ic_download.svg';
import emailOutline from '../../assets/icons/outline/ic_email.svg';
import exitOutline from '../../assets/icons/outline/ic_exit.svg';
import externalLinkOutline from '../../assets/icons/outline/ic_external_link.svg';
import eyeHiddenOutline from '../../assets/icons/outline/ic_eye_hidden.svg';
import eyeViewOutline from '../../assets/icons/outline/ic_eye_view.svg';
import facebookOutline from '../../assets/icons/outline/ic_facebook.svg';
import figmaOutline from '../../assets/icons/outline/ic_figma.svg';
import filterAsOutline from '../../assets/icons/outline/ic_filter_as.svg';
import filterDesOutline from '../../assets/icons/outline/ic_filter_des.svg';
import filterSortOutline from '../../assets/icons/outline/ic_filter_sort.svg';
import filterOutline from '../../assets/icons/outline/ic_filter.svg';
import githubOutline from '../../assets/icons/outline/ic_github.svg';
import gitlabOutline from '../../assets/icons/outline/ic_gitlab.svg';
import houseOutline from '../../assets/icons/outline/ic_house.svg';
import importantOutline from '../../assets/icons/outline/ic_important.svg';
import informationOutline from '../../assets/icons/outline/ic_information.svg';
import instagramOutline from '../../assets/icons/outline/ic_instagram.svg';
import kofiOutline from '../../assets/icons/outline/ic_kofi.svg';
import linkedinOutline from '../../assets/icons/outline/ic_linkedin.svg';
import listOutline from '../../assets/icons/outline/ic_list.svg';
import locationOutline from '../../assets/icons/outline/ic_location.svg';
import menuLeftOutline from '../../assets/icons/outline/ic_menu_left.svg';
import menuRightOutline from '../../assets/icons/outline/ic_menu_right.svg';
import menuTwoOutline from '../../assets/icons/outline/ic_menu_two.svg';
import menuOutline from '../../assets/icons/outline/ic_menu.svg';
import messageOutline from '../../assets/icons/outline/ic_message.svg';
import microphoneOutline from '../../assets/icons/outline/ic_microphone.svg';
import minusOutline from '../../assets/icons/outline/ic_minus.svg';
import moneyOutline from '../../assets/icons/outline/ic_money.svg';
import moonOutline from '../../assets/icons/outline/ic_moon.svg';
import negativeOutline from '../../assets/icons/outline/ic_negative.svg';
import notionOutline from '../../assets/icons/outline/ic_notion.svg';
import peopleOutline from '../../assets/icons/outline/ic_people.svg';
import personOutline from '../../assets/icons/outline/ic_person.svg';
import plusOutline from '../../assets/icons/outline/ic_plus.svg';
import positiveOutline from '../../assets/icons/outline/ic_positive.svg';
import questionOutline from '../../assets/icons/outline/ic_question.svg';
import rowsOutline from '../../assets/icons/outline/ic_rows.svg';
import searchOutline from '../../assets/icons/outline/ic_search.svg';
import settingsOutline from '../../assets/icons/outline/ic_settings.svg';
import shareOutline from '../../assets/icons/outline/ic_share.svg';
import speakOutline from '../../assets/icons/outline/ic_speak.svg';
import spotifyOutline from '../../assets/icons/outline/ic_spotify.svg';
import squareOutline from '../../assets/icons/outline/ic_square.svg';
import starOutline from '../../assets/icons/outline/ic_star.svg';
import sunOutline from '../../assets/icons/outline/ic_sun.svg';
import tagOutline from '../../assets/icons/outline/ic_tag.svg';
import tiktokOutline from '../../assets/icons/outline/ic_tiktok.svg';
import trashOutline from '../../assets/icons/outline/ic_trash.svg';
import twitchOutline from '../../assets/icons/outline/ic_twitch.svg';
import twitterOutline from '../../assets/icons/outline/ic_twitter.svg';
import uploadOutline from '../../assets/icons/outline/ic_upload.svg';
import warningOutline from '../../assets/icons/outline/ic_warning.svg';
import youtubeOutline from '../../assets/icons/outline/ic_youtube.svg';

import bitcoinOutline from '../../assets/icons/outline/ic_bitcoin.svg';
import cakeOutline from '../../assets/icons/outline/ic_cake.svg';
import chickOutline from '../../assets/icons/outline/ic_chick.svg';
import chickenLegOutline from '../../assets/icons/outline/ic_chicken_leg.svg';
import discordOutline from '../../assets/icons/outline/ic_discord.svg';
import drinkOutline from '../../assets/icons/outline/ic_drink.svg';
import messengerOutline from '../../assets/icons/outline/ic_messenger.svg';
import pandaOutline from '../../assets/icons/outline/ic_panda.svg';
import patreonOutline from '../../assets/icons/outline/ic_patreon.svg';
import paypalOutline from '../../assets/icons/outline/ic_paypal.svg';
import pieceCakeOutline from '../../assets/icons/outline/ic_piece_cake.svg';
import rootsOutline from '../../assets/icons/outline/ic_roots.svg';
import sushiOutline from '../../assets/icons/outline/ic_sushi.svg';
import telegramOutline from '../../assets/icons/outline/ic_telegram.svg';
import tetherOutline from '../../assets/icons/outline/ic_tether.svg';
import whatsappOutline from '../../assets/icons/outline/ic_whatsapp.svg';
import wineOutline from '../../assets/icons/outline/ic_wine.svg';

import bitcoinSolid from '../../assets/icons/solid/ic_bitcoin.svg';
import cakeSolid from '../../assets/icons/solid/ic_cake.svg';
import chickSolid from '../../assets/icons/solid/ic_chick.svg';
import chickenLegSolid from '../../assets/icons/solid/ic_chicken_leg.svg';
import discordSolid from '../../assets/icons/solid/ic_discord.svg';
import drinkSolid from '../../assets/icons/solid/ic_drink.svg';
import messengerSolid from '../../assets/icons/solid/ic_messenger.svg';
import pandaSolid from '../../assets/icons/solid/ic_panda.svg';
import patreonSolid from '../../assets/icons/solid/ic_patreon.svg';
import paypalSolid from '../../assets/icons/solid/ic_paypal.svg';
import pieceCakeSolid from '../../assets/icons/solid/ic_piece_cake.svg';
import rootsSolid from '../../assets/icons/solid/ic_roots.svg';
import sushiSolid from '../../assets/icons/solid/ic_sushi.svg';
import telegramSolid from '../../assets/icons/solid/ic_telegram.svg';
import tetherSolid from '../../assets/icons/solid/ic_tether.svg';
import whatsappSolid from '../../assets/icons/solid/ic_whatsapp.svg';
import wineSolid from '../../assets/icons/solid/ic_wine.svg';



const solidIcons = {
  dynamic: dynamicSolid,
  symbol: symbolSolid,
  arrow_down: arrowDownSolid,
  arrow_left: arrowLeftSolid,
  arrow_right: arrowRightSolid,
  arrow_up: arrowUpSolid,
  bell: bellSolid,
  briefcase: briefcaseSolid,
  calendar: calendarSolid,
  cart: cartSolid,
  clock: clockSolid,
  copy: copySolid,
  dashboard: dashboardSolid,
  download: downloadSolid,
  email: emailSolid,
  exit: exitSolid,
  external_link: externalLinkSolid,
  eye_hidden: eyeHiddenSolid,
  eye_view: eyeViewSolid,
  facebook: facebookSolid,
  figma: figmaSolid,
  filter_as: filterAsSolid,
  filter_des: filterDesSolid,
  filter_sort: filterSortSolid,
  filter: filterSolid,
  github: githubSolid,
  gitlab: gitlabSolid,
  house: houseSolid,
  information: informationSolid,
  important: importantSolid,
  instagram: instagramSolid,
  kofi: kofiSolid,
  linkedin: linkedinSolid,
  list: listSolid,
  location: locationSolid,
  menu_left: menuLeftSolid,
  menu_right: menuRightSolid,
  menu_two: menuTwoSolid,
  menu: menuSolid,
  message: messageSolid,
  microphone: microphoneSolid,
  minus: minusSolid,
  money: moneySolid,
  moon: moonSolid,
  negative: negativeSolid,
  notion: notionSolid,
  people: peopleSolid,
  person: personSolid,
  plus: plusSolid,
  positive: positiveSolid,
  question: questionSolid,
  rows: rowsSolid,
  search: searchSolid,
  settings: settingsSolid,
  share: shareSolid,
  speak: speakSolid,
  spotify: spotifySolid,
  square: squareSolid,
  star: starSolid,
  sun: sunSolid,
  tag: tagSolid,
  tiktok: tiktokSolid,
  trash: trashSolid,
  twitch: twitchSolid,
  twitter: twitterSolid,
  upload: uploadSolid,
  warning: warningSolid,
  youtube: youtubeSolid,
  bitcoin: bitcoinSolid,
  chick: chickSolid,
  cake: cakeSolid,
  chicken_leg: chickenLegSolid,
  discord: discordSolid,
  drink: drinkSolid,
  messenger: messengerSolid,
  panda: pandaSolid,
  patreon: patreonSolid,
  paypal: paypalSolid,
  piece_cake: pieceCakeSolid,
  roots: rootsSolid,
  sushi: sushiSolid,
  telegram: telegramSolid,
  tether: tetherSolid,
  whatsapp: whatsappSolid,
  wine: wineSolid,
};

const outlineIcons = {
  dynamic: dynamicOutline,
  symbol: symbolOutline,
  arrow_down: arrowDownOutline,
  arrow_left: arrowLeftOutline,
  arrow_right: arrowRightOutline,
  arrow_up: arrowUpOutline,
  bell: bellOutline,
  briefcase: briefcaseOutline,
  calendar: calendarOutline,
  cart: cartOutline,
  clock: clockOutline,
  copy: copyOutline,
  dashboard: dashboardOutline,
  download: downloadOutline,
  email: emailOutline,
  exit: exitOutline,
  external_link: externalLinkOutline,
  eye_hidden: eyeHiddenOutline,
  eye_view: eyeViewOutline,
  facebook: facebookOutline,
  figma: figmaOutline,
  filter_as: filterAsOutline,
  filter_des: filterDesOutline,
  filter_sort: filterSortOutline,
  filter: filterOutline,
  github: githubOutline,
  gitlab: gitlabOutline,
  house: houseOutline,
  information: informationOutline,
  important: importantOutline,
  instagram: instagramOutline,
  kofi: kofiOutline,
  linkedin: linkedinOutline,
  list: listOutline,
  location: locationOutline,
  menu_left: menuLeftOutline,
  menu_right: menuRightOutline,
  menu_two: menuTwoOutline,
  menu: menuOutline,
  message: messageOutline,
  microphone: microphoneOutline,
  minus: minusOutline,
  money: moneyOutline,
  moon: moonOutline,
  negative: negativeOutline,
  notion: notionOutline,
  people: peopleOutline,
  person: personOutline,
  plus: plusOutline,
  positive: positiveOutline,
  question: questionOutline,
  rows: rowsOutline,
  search: searchOutline,
  settings: settingsOutline,
  share: shareOutline,
  speak: speakOutline,
  spotify: spotifyOutline,
  square: squareOutline,
  star: starOutline,
  sun: sunOutline,
  tag: tagOutline,
  tiktok: tiktokOutline,
  trash: trashOutline,
  twitch: twitchOutline,
  twitter: twitterOutline,
  upload: uploadOutline,
  warning: warningOutline,
  youtube: youtubeOutline,
  bitcoin: bitcoinOutline,
  chick: chickOutline,
  cake: cakeOutline,
  chicken_leg: chickenLegOutline,
  discord: discordOutline,
  drink: drinkOutline,
  messenger: messengerOutline,
  panda: pandaOutline,
  patreon: patreonOutline,
  paypal: paypalOutline,
  piece_cake: pieceCakeOutline,
  roots: rootsOutline,
  sushi: sushiOutline,
  telegram: telegramOutline,
  tether: tetherOutline,
  whatsapp: whatsappOutline,
  wine: wineOutline,
};

@Component({
  tag: 'symbol-icon',
  styleUrl: 'icon.component.scss',
  shadow: true,
  scoped: false,
})
export class SymbolIcon {
  @Prop() name: string;
  @Prop() iconClass?: string;
  @Prop() type: StyleType = 'solid';

  render() {
    return (
      <Host role="img">
        <span
          class={`${this.iconClass} symbol-icon-container`}
          innerHTML={
            this.type === 'solid'
              ? solidIcons[this.name]
              : outlineIcons[this.name]
          }
        ></span>
      </Host>
    );
  }
}
