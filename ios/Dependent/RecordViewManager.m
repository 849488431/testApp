//
//  RecordViewManager.m
//  testApp
//
//  Created by Huang on 2017/9/5.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "RecordViewManager.h"
#import "RecordView.h"

@implementation RecordViewManager

RCT_EXPORT_MODULE()

-(UIView *)view {
  return [[RecordView alloc] init];
}

@end
