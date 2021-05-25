import Icon from '@chakra-ui/icon'
import "./Profile.css"
import { HStack } from '@chakra-ui/layout'
import React from 'react'
import { FaFacebookF, FaGoogle, FaSpotify,  } from 'react-icons/fa'
import {SiLinuxmint} from "react-icons/si"

function Social() {
    return (
        <div className="icon">
        <HStack spacing="10">
            <Icon as={FaFacebookF} boxSize="50" />
            <Icon as={FaGoogle} boxSize="50" />
            <Icon as={FaSpotify} boxSize="50" />
            <Icon as={SiLinuxmint} boxSize="50" />
        </HStack>
        </div>
    )
}

export default Social