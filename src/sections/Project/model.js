import React, { Fragment } from 'react'
import Tags from '../../utils/tags'
import { getImages } from '../../utils/functions'

const rememberMeImages = getImages('projects/rememberMe', 1)
const allabouteggsImages = getImages('projects/allabouteggs', 1)
const reversiImages = getImages('projects/reversi', 2)
const chatImages = getImages('projects/chat', 1)
const pongImages = getImages('projects/pong', 2)
const spacefighterImages = getImages('projects/spacefighter', 2)
const saveturtleImages = getImages('projects/saveturtle', 1)
const whackamoleImages = getImages('projects/whackamole', 2)
const remecImages = getImages('projects/remec', 3)
const takecarecupImages = getImages('projects/takecarecup', 3)
const bcbk8Images = getImages('projects/bcbk8', 2)
const whatwordImages = getImages('projects/whatword', 2)

const projects = [
  {
    name: 'Highschool',
    list: [
      {
        name: 'Remember Me',
        tags: [ Tags.python, Tags.tkinter ],
        year: <Fragment> 11<sup>th</sup> Grade </Fragment>,
        images: rememberMeImages,
        description: `
          Remember Me is a flashcards reader/builder where
          users can build their own flashcards and review it.
          You can create, edit, remove and even share your deck by exporting
          the saved deck into file. And we also have a test feature where you
          can test yourself to help you remember the cards even better.
        `
      },
      {
        name: 'All About Eggs',
        tags: [ Tags.swift ],
        year: <Fragment> 11<sup>th</sup> Grade </Fragment>,
        images: allabouteggsImages,
        description: `
          All About Eggs is an iOS application that helps users to make
          quality eggs. This application is for people who have no idea
          about cooking, but wanting to learn the easiest way to cook an egg.
          The users can choose how boiled the york will be, and the application
          will calculate an oppropriate timing for the boiling.
        `
      },
      {
        name: 'Reversi',
        tags: [ Tags.java, Tags.swing ],
        year: <Fragment> 11<sup>th</sup> Grade </Fragment>,
        images: reversiImages,
        description: `
          Reversi or "Othello" board game. 2 Players will take turn to
          play as black and white tiles. When the board is full, player who
          occupied more spaces than another will win. In each turn, the player
          will see legal moves hint shown on the board as gray dots, which
          means they can place the tile on the dot position.
        `
      },
      {
        name: 'Multi-client Chat',
        tags: [ Tags.java, Tags.swing ],
        year: <Fragment> 11<sup>th</sup> Grade </Fragment>,
        images: chatImages,
        description: `
          A chat system with a dedicated server. Multiple clients can join
          and communicate though the dedicated server, which acts as a message
          forwarder from a sender to all recievers. The system is running on
          TCP/IP protocal which makes sure all packets are sent to server
          without dropping.
        `
      },
      {
        name: 'Pong Online',
        tags: [ Tags.java, Tags.swing ],
        year: <Fragment> 12<sup>th</sup> Grade </Fragment>,
        images: pongImages,
        description: `
          A "Pong" game which you can play with your friends around the world.
          The host will act as the server so that the client can connect to
          and play with. Information about the server and client will be shown
          in the game, as well as the ball and paddle position. This game also
          has a protection for player disconnecting, which the server will wait
          for them to reconnect, and continue playing without resetting the game.
        `
      },
      {
        name: 'Space Fighter',
        tags: [ Tags.java, Tags.swing ],
        year: <Fragment> 12<sup>th</sup> Grade </Fragment>,
        images: spacefighterImages,
        description: `
          2D space shooting game with amazing animations and sound effects.
          The objective is to shoot the enemies spaceship, which has 3 health
          points each. And you must protect you mother ship by not letting more
          than 3 enemies cross though the left side of the screen. The score will
          reset after you die.
        `
      },
      {
        name: 'Save da Turtle',
        tags: [ Tags.java, Tags.android ],
        year: <Fragment> 12<sup>th</sup> Grade </Fragment>,
        images: saveturtleImages,
        description: `
          Save da Turtle a mobile game built using Android Studio.
          The point of this game is to save (tap) as much tutles as you can
          while the time is running. The turtle will randomly spawn in one of
          the 3 lanes the user successfully tap on a turtle. Each turtle saved
          worth 1 point.
        `
      }
    ]
  },
  {
    name: 'Capstone Project',
    list: [
      {
        name: 'A-life Simulator',
        tags: [ Tags.java, Tags.swing ],
        year: <Fragment> 12<sup>th</sup> Grade </Fragment>,
        images: [],
        description: (
          <Fragment>
            {`
              Artificial Life (A-life), is a simulation that simulates behavior of
              animals within an environment created by you. You can design your own
              animal, what type of food they are eating, speed, reproduction
              behavior, etc. Then you can spawn them anywhere in the given environment.
              Each animal will have normal instinct, in order to simulates real animals.
            `}
            <br />&emsp;
            {`
              This simulator helps students study about biodiversity and
              the effects when a variable has changed. Users can interact with
              the environment by inserting new animals or removing some animals.
              You just need to let the simulation runs, and observe outcomes
              in real time.
            `}
          </Fragment>
        )
      }
    ]
  },
  {
    name: 'College',
    list: [
      {
        name: 'Whack A Mole',
        tags: [ Tags.java, Tags.android ],
        year: <Fragment> 1<sup>st</sup> Year </Fragment>,
        images: whackamoleImages,
        description: `
          The game's goal is to tap on the moles to gain points before the
          time is running out. Each mole will have a unique ability,
          for example, the red ones will deduct your points, as well as your
          time. The blue ones give you not much pointes, but it increase your
          time by +1. The orange ones give you a huge amount of points.
        `
      },
      {
        name: 'Remec',
        collaborator: {
          name: 'Thitiwat Thongbor',
          site: 'https://github.com/thitgorn'
        },
        tags: [ Tags.java, Tags.swing, Tags.android ],
        year: <Fragment> 1<sup>st</sup> Year </Fragment>,
        images: remecImages,
        description: (
          <Fragment>
            <b>Remec</b> is an
            {' '}
            <a rel='noopener noreferrer' target='_blank'
              href='https://github.com/thitgorn/remec'>open-source</a>
            {' '}
            IoT (Internet of Things) application which tranforms your android device into a custom computer remote control
            with your own design. You can design your own remote interface and
            its key combinations. When the remote is ready, open the Remec
            android application to get ready for tranfering the remote design
            into your mobile. See project
            {' '}
            <a rel='noopener noreferrer' target='_blank'
              href='https://thitgorn.github.io/remec/'>website</a>.
          </Fragment>
        )
      },
      {
        name: 'Take Care na Cup',
        collaborator: {
          name: 'Sirakorn Lamyai',
          site: 'https://srakrn.me/'
        },
        tags: [ Tags.html, Tags.js, Tags.jQuery ],
        year: <Fragment> 1<sup>st</sup> Year </Fragment>,
        images: takecarecupImages,
        description: (
          <Fragment>
            <b>TakeCareNaCup</b> is an IoT tumbler, with the ability to log and track
            water consumption rate and frequency in each day, in order to
            improve users' lifestyle into those with better health. See
            {' '}
            <a rel='noopener noreferrer' target='_blank'
              href='http://github.com/kykungz/takecarenacup'>project website</a>
            {' '}
            and
            {' '}
            <a rel='noopener noreferrer' target='_blank'
              href='http://exceed.cpe.ku.ac.th/wiki/index.php/Exceed_14_Group_8'>wiki</a>.
          </Fragment>
        )
      },
      {
        name: 'What word is it?',
        tags: [ Tags.js, Tags.node, Tags.vue ],
        year: <Fragment> 2<sup>nd</sup> Year </Fragment>,
        images: whatwordImages,
        description: (
          <Fragment>
            A fun/ice-breaking group activity which you can create your own game
            and play. Users can generate a game by listing all the words into
            the word bank. The gamemaster will control the game through remote,
            and the game can be displayed on the screen. One person will be guessing
            the word without seeing the answer, while others will see the answer
            but cannot say the word.{' '}
            <a rel='noopener noreferrer' target='_blank'
              href='http://kykungz.github.io/whatword'>Play now</a>.
          </Fragment>
        )
      },
      {
        name: 'Barcamp Bangkhen 8',
        tags: [ Tags.js, Tags.sass, Tags.react ],
        year: <Fragment> 2<sup>nd</sup> Year </Fragment>,
        images: bcbk8Images,
        description: (
          <Fragment>
            <b>BarCamp</b> is an unconference event that assembles people who want to
            share knowledge, thoughts, experiences, or stories to other
            participants. This event has no definite sessions as everyone can
            choose topics they want to participate in.
          </Fragment>
        )
      }
    ]
  }
]

export default projects.map(project => ({ ...project, list: project.list.reverse() })).reverse()
