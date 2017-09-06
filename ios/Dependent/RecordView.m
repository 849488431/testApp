//
//  RecordView.m
//  testApp
//
//  Created by Huang on 2017/9/5.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "RecordView.h"

@interface RecordView ()

@property(strong,nonatomic)UIView *view;

@end

@implementation RecordView

- (instancetype)init
{
  self = [super init];
  if (self) {
    self.view = [[UIView alloc]init];
    self.view.backgroundColor = [UIColor redColor];
    [self addSubview:self.view];
  }
  return self;
}

- (void)layoutSubviews{
  [super layoutSubviews];
  
  [self layout];
}


- (void)layout{
  CGFloat height = self.bounds.size.height;
  CGFloat width = self.bounds.size.width;
  
  self.view.frame = CGRectMake(0, 0, 100.0, 100.0);
}

@end
