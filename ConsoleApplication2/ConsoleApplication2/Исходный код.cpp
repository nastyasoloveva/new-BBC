#include <stdio.h>
#include <conio.h>
void main()
{
	
	char c='A', strsample[]="A string for experiments";

int iln = 0,//счетчик строк
	ivalue=1234;
double dPi=3.14159265;
//код задани€
/*Ёто еще один способ ожидани€ нажати€ клавиши Ц вызов функции kbhit() из бибилиотеки <conio.h>. ‘ункци€ ожидает нажати€ клавиши и в этом случает возвращает Ђистинуї, в противном случае Ц Ђложьї. “о есть работа пустого цикла будет продолжатьс€ до тех пор, пока не будет нажата кака€-либо клавиша*/
//printf("\nPress any key to continue, please!");
//while (!kbhit());
printf("\n[%2d] %c",++iln, c);
printf("\n[% 2d] %d",++iln,c);
printf("\n[% 2d] %c",++iln,110);
printf("\n[% 2d] %o",++iln,ivalue);
printf("\n[% 2d] %x",++iln,ivalue);
printf("\n[% 2d] %X",++iln,ivalue);
printf("\n[% 2d] %8d %5s",++iln,4);
printf("\n[% 2d] %-8d",++iln,4);
printf("\n[% 2d] %24s",++iln,strsample);
printf("\n[% 2d] %5s",++iln,strsample);
printf("\n[% 2d] %38s %8d",++iln,strsample);
printf("\n[% 2d] %38s %-8d",++iln,strsample);
printf("\n[%2d] %d",++iln,ivalue );
printf("\n[%2d] %+d",++iln,ivalue );
printf("\n[%2d] %3d",++iln,ivalue );
printf("\n[%2d] %10d",++iln,ivalue );
printf("\n[%2d] %-10d",++iln,ivalue );
printf("\n[%2d] %010d",++iln,ivalue );
printf("\n[%2d] %-010d",++iln,ivalue );
printf("\n[%2d] %f",++iln,dPi );
printf("\n[%2d] %20f",++iln,dPi );
printf("\n[%2d] %-20f",++iln,dPi );
printf("\n[%2d] %020f",++iln,dPi );
printf("\n[%2d] %-020f",++iln,dPi );
printf("\n[%2d] %19s",++iln,strsample );
printf("\n[%2d] %1.2s %19s",++iln,strsample);
printf("\n[%2d] %1.6s %19s",++iln,strsample);
printf("\n[%2d] %10f",++iln,dPi );   
printf("\n[%2d]  %#20.2f",++iln,dPi );
printf("\n[%2d] %#-20.4f",++iln,dPi );
printf("\n[%2d] %#20.4f",++iln,dPi );
printf("\n[%2d] %#20.2e",++iln,dPi );
printf("\n[%2d] %/s\a %s",++iln,strsample);
printf("\n[%2d] %19.6s",++iln,strsample);
printf("\n[%2d] %s",++iln,strsample);
printf("\n[%2d] %s \v ",++iln,strsample);
printf("\n[%2d] %s",++iln,strsample);
printf("\n[%2d] \" %s \" ",++iln,strsample);
printf("\n[%2d] '%s'",++iln,strsample); 
printf("\n[%2d]  ?%s? ",++iln,strsample);
printf("\n[%2d]  %s \ ",++iln,strsample);
printf("\n[%2d]  %x  ",++iln,c);
printf("\n[%2d]  %o  ",++iln,c);
getch();
}
