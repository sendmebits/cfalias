"use client"
import { Link, Box, Button, Container, Flex, HStack, Text } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from '@/context/UserContext';
import NextLink from 'next/link'
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { GithubIcon } from '@/icons';

export default function Header() {

    const { accountId, zoneId, accessToken, isAuthenticated, clearAllValues } = useContext(UserContext);
    const [isLoggingOut, setIsLoggingOut] = useState<boolean>(false);

    useEffect(() => {
        if (isLoggingOut && !accountId && !zoneId && !accessToken) {
            window.location.href = "/";
        }
    }, [isLoggingOut, accountId, zoneId, accessToken])

    return (
        <Box py={[2, 5]} boxShadow='sm'>
            <Container maxW={'100%'}>
                <Flex justifyContent="space-between" alignItems={'center'}>
                    <Link
                        as={NextLink}
                        href={isAuthenticated ? "/app" : "/login"}
                        aria-label="cfalias"
                        _hover={{ textDecoration: 'none' }}
                    >
                        <Flex alignItems="flex-end" fontSize={['2xl', '4xl']} fontWeight={900} lineHeight={1} letterSpacing="-0.04em">
                            <Text as="span">cfalias</Text>
                            <Box as="span" bg="orange.300" w="0.2em" h="0.2em" ml="0.06em" mb="0.04em" />
                        </Flex>
                    </Link>

                    <div>
                        <HStack spacing={7}>

                            {(isAuthenticated || isLoggingOut) ?
                                <Link as={NextLink} href="/login">
                                    <Button onClick={() => {
                                        setIsLoggingOut(true);
                                        clearAllValues()
                                        localStorage.clear();
                                    }}
                                        variant='outline'
                                        isLoading={isLoggingOut}
                                    >
                                        Log out
                                    </Button>
                                </Link>
                                :
                                <Link as={NextLink} href="/login">
                                    <Button
                                        variant='outline'
                                        size={['md', 'lg']}
                                        iconSpacing={5}
                                        rightIcon={<ArrowForwardIcon />}
                                    >
                                        Launch
                                    </Button>
                                </Link>
                            }
                        </HStack>
                    </div>
                </Flex>
            </Container >
        </Box>
    );
}
