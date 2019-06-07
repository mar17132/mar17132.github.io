
#include <iostream>
#include <fstream>
#include <sstream>
#include <stdlib.h>
#include <unistd.h>
#include <string>
#include <vector>

using namespace std;

void partone()
{
    int *tHeap(new int);
    int *tStack;
    void * tCode2;
    
    tCode2 = reinterpret_cast<void*>(partone);
    
    cout << "stack: " << &tStack << "\n";
    cout << "heap: " << tHeap << "\n";
    cout << "code: " << tCode2 << "\n";
}



void parttwo()
{

    long bow = 10 + 1111111111;
    long thex = 0x7ffd3df86218;
        
    for(int i = -4; i <= 20; i++)
    {
        void * tStack;
        string * tString;
        //tStack = reinterpret_cast<void*>(bow);
        tStack = &bow;
        cout << (&tStack + i); //address
        cout << "\t";
        cout << *(&tStack + i); //hex or value
        
        cout << "\t";  
        cout << "\n";
        
    }
}


void partthree()
{
    
}

int main()
{

    partone();
    cout << "\n";
    parttwo();
    
    return 0;
}
