
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFeedItemInfo } from './KalturaFeedItemInfo';
import { KalturaDropFolder, KalturaDropFolderArgs } from './KalturaDropFolder';

export interface KalturaFeedDropFolderArgs  extends KalturaDropFolderArgs {
    itemHandlingLimit? : number;
	feedItemInfo? : KalturaFeedItemInfo;
}


export class KalturaFeedDropFolder extends KalturaDropFolder {

    itemHandlingLimit : number;
	feedItemInfo : KalturaFeedItemInfo;

    constructor(data? : KalturaFeedDropFolderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFeedDropFolder' },
				itemHandlingLimit : { type : 'n' },
				feedItemInfo : { type : 'o', subTypeConstructor : KalturaFeedItemInfo, subType : 'KalturaFeedItemInfo' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFeedDropFolder',KalturaFeedDropFolder);
